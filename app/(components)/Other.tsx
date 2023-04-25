import React from "react";
import Card from "./Card";

type Props = {};

const Other = (props: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <p className="font-bold text-2xl my-8 sm:text-3xl">
          Other Trending Posts
        </p>
      </div>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
        <Card imageHeight="h-80" className="bg-wh-500 mt-5 sm:mt-0" />
      </div>
    </section>
  );
};

export default Other;
