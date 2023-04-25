import React from "react";
import Card from "@components/Card";

type Props = {};

const Tech = (props: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 bg-accent-orange text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl sm:text-3xl">
          Latest News in Technology
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-4 gap-3 sm:h-[600px] mt-3">
        <Card
          imageHeight=""
          className="col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-3 "
        ></Card>
        <Card
          imageHeight=""
          className="col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-1 sm:h-auto"
        ></Card>
        <Card
          imageHeight=""
          className="col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-1 sm:h-auto"
        ></Card>
        <Card
          imageHeight=""
          className="col-span-4 row-span-auto bg-wh-900 sm:col-span-2 sm:row-span-1 sm:h-auto"
        ></Card>
      </div>
    </section>
  );
};

export default Tech;
