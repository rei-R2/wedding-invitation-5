"use client";

import { useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export default function Location() {
  const defaultClassNames = getDefaultClassNames();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="px-3 py-20 md:py-28 lg:flex lg:justify-between lg:px-10">
      {/* calender */}
      <div className="mb-20">
        <p className="-mb-2 text-center font-tangerine text-2xl font-semibold md:text-3xl">
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

      {/* location */}
      <div className="overflow-hidden lg:w-1/2">
        <h1 className="mb-10 text-end font-helvetica-bold text-4xl md:text-5xl">
          Location
        </h1>
        <div className="flex items-end gap-x-3 md:gap-x-6">
          <div ref={ref} className="relative w-1/2">
            <div
              style={{
                transition: "all 4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className={`absolute left-0 top-0 z-10 h-96 w-full bg-white delay-1000 lg:h-[600px] ${!isInView ? "translate-y-0" : "translate-y-[400px] md:translate-y-[600px] lg:translate-y-[800px]"}`}
            />
            <Image
              src="/location.png"
              alt="location-img"
              className="w-full object-cover"
              width={1000}
              height={1000}
            />
          </div>

          <div className="w-1/2 md:ms-auto md:w-1/3">
            <p className="mb-2 text-end font-helvetica text-sm md:ms-auto md:text-base">
              Gedung KOLOGDAM, KODIKLAT TNI AD. Jl.Aceh, Merdeka, Kec. Sumur
              Bandung,Kota Bandung
            </p>
            <div className="flex items-center justify-end gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo text-blue-800"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                />
              </svg>
              <Link
                href={
                  "https://www.google.com/maps/place/PET+home/@-7.5292895,109.130666,18.58z/data=!4m6!3m5!1s0x2e6569bc5cd1dd0f:0x953e495e1bcc7a69!8m2!3d-7.5290258!4d109.1305312!16s%2Fg%2F11l2x3yzgv?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
                }
                className="text-end font-helvetica text-sm text-blue-700 md:text-base"
              >
                Google Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
