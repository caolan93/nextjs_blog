import React from "react";
import Card from "../(components)/Card";

type Props = {};

const Travel = (props: Props) => {
  return (
    <section className="mt-t">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 bg-accent-green text-wh-900 text-sm font-bold">
          Travel
        </h4>
        <p className="font-bold text-2xl sm:text-3xl">New Travel Experiences</p>
      </div>
      <div className="sm:flex justify-between gap-8">
        <Card
          imageHeight="h-80"
          className="basis-1/3  bg-wh-500 mt-5 sm:mt-0"
        />
        <Card
          imageHeight="h-80"
          className="basis-1/3  bg-wh-500 mt-5 sm:mt-0"
        />
        <Card
          imageHeight="h-80"
          className="basis-1/3  bg-wh-500 mt-5 sm:mt-0"
        />
      </div>
      <Card
        imageHeight="h-80"
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5 basis-full bg-wh-500"
      />
    </section>
  );
};

export default Travel;
