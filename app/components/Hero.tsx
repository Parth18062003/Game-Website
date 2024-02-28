"use client";
import React from "react";
import { ContainerScroll } from "../Aceternity/container-scroll-animation";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Skateboarding Adventure Awaits!<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Skate Nation XL
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

