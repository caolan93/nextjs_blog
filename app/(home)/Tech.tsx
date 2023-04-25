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
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-8 my-5">
        <Card
          imageHeight="h-96"
          isLongForm={true}
          className="bg-wh-500 col-span-1 row-span-3"
        />
        <Card
          imageHeight="h-48"
          isSmallCard={true}
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
        />
        <Card
          imageHeight="h-48"
          isSmallCard={true}
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
        />
        <Card
          imageHeight="h-48"
          isSmallCard={true}
          className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
        />
      </div>
    </section>
  );
};

export default Tech;
