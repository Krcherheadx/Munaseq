import React from "react";
import dateIcon from "@/assets/land-assets/date-icon.svg";
import timeIcon from "@/assets/land-assets/time-icon.svg";
import presenterIcon from "@/assets/land-assets/presenter-icon.svg";
import rateIcon from "@/assets/land-assets/rate-icon.svg";
import Image from "next/image";
import Button from "./button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function largeCard({
  image,
  title,
  description,
  time,
  date,
  presenter,
  rate,
  cost,
  badges = [],
}: {
  image: StaticImport;
  title: string;
  description: string;
  time: string;
  date: string;
  presenter: string;
  rate: number;
  cost: string;
  badges: string[];
}) {
  return (
    <>
      <div className="">
        <div className="max-w-md rounded-3xl border border-gray-200 bg-white p-4 shadow">
          <Image className="rounded-3xl mb-2" src={image} alt="" />
          <div className="p-2">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="rounded-full bg-purple-100 px-2.5 py-1 ml-2 text-sm font-medium text-purple-800"
              >
                {badge}
              </span>
            ))}

            <h5 className="my-2 text-3xl font-bold tracking-tight text-custom-black">
              {title}
            </h5>

            <p className="mb-4 font-light text-custom-gray text-sm">
              {description}
            </p>
            <div>
              <div className="flex gap-5 mb-3 font-medium items-center">
                <div className="flex gap-2 items-center">
                  <Image src={timeIcon} alt="" />
                  <p className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent text-base">
                    {time}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={dateIcon} alt="" />
                  <p className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent text-base">
                    {date}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 font-medium items-center">
                <div className="flex gap-2">
                  <Image src={presenterIcon} alt="" />
                  <p className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent text-base">
                    {presenter}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={rateIcon} alt="" />
                  <p className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent text-base">
                    {rate}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-2xl font-bold text-custom-black">{cost}</p>
              <Button gradient>انضم الان</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
