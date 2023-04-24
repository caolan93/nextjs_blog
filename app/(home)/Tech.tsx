import React from "react";

type Props = {};

const Tech = (props: Props) => {
  return (
    <section>
      <h2 className="flex items-center font-bold text-xl sm:text-3xl">
        <span className="mr-2 px-3 py-1 bg-accent-orange text-wh-900 text-sm font-bold">
          HOT
        </span>
        Latest News in Technology
      </h2>
      <div className="grid grid-rows-3 grid-cols-4 gap-3 sm:h-[600px] mt-3">
        <div className="h-96 col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-3 sm:h-full"></div>
        <div className="h-96 col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-1 sm:h-auto"></div>
        <div className="h-96 col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-1 sm:h-auto"></div>
        <div className="h-96 col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-1 sm:h-auto"></div>
      </div>
    </section>
  );
};

export default Tech;
