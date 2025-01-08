"use client";

import Image from "next/image";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export default function Location() {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="px-3 py-20">
      <div className="mb-20">
        <p className="-mb-2 text-center font-tangerine text-2xl font-semibold">
          The Date
        </p>

        <DayPicker
          mode="single"
          selected={new Date()}
          hideNavigation
          classNames={{
            today: `text-[#500724] font-bold`,
            selected: `bg-[#fce7f3] rounded-full`,
            root: `${defaultClassNames.root} flex justify-center`,
          }}
        />
      </div>
      <div className="">
        <h1 className="mb-10 text-end font-helvetica-bold text-4xl">
          Location
        </h1>
        <div className="flex items-end gap-x-3">
          <Image
            src="/location.png"
            alt="location-img"
            className="w-1/2"
            width={1000}
            height={1000}
          />
          <p className="w-1/2 text-end font-helvetica text-sm">
            Gedung KOLOGDAM, KODIKLAT TNI AD. Jl.Aceh, Merdeka, Kec. Sumur
            Bandung,Kota Bandung
          </p>
        </div>
      </div>
    </div>
  );
}
