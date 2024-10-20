import getProfileAction from "@/proxy/get-profile-action";
import userCircle from "@/assets/icons/user-circle.svg";
import Image from "next/image";
import convertBase64ToImage from "@/util/convertBase64ToImage";

import { cookies } from "next/headers";
import Dropdown from "../common/dropdown";
import { redirect } from "next/navigation";
import { UserDataDto } from "@/dtos/user-data.dto";

export default async function MenuProfile() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  let data: UserDataDto;
  if (token) {
    data = await getProfileAction(token.value);
    return (
      <div className="flex gap-3 p-5 items-center">
        <div className="w-20 aspect-square relative rounded-full overflow-hidden">
          {data.profilePictureUrl ? (
            <Image
              src={data.profilePictureUrl}
              alt="preview"
              fill
              priority
            />
          ) : (
            <Image src={userCircle} alt="user-circle" fill priority />
          )}
        </div>
        <div className="mt-2">
          <div className="font-bold text-lg text-nowrap overflow-ellipsis overflow-hidden w-44">
            {data.firstName + " " + data.lastName}
          </div>
          <div className="text-custom-gray text-nowrap overflow-ellipsis overflow-hidden w-44">
            {data.username}
          </div>
        </div>
        <Dropdown />
      </div>
    );
  }
  redirect("/signin");
}
