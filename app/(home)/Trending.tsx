import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias
          doloremque dolores perspiciatis. Dolore nulla dicta rerum mollitia
          explicabo neque?
        </p>
      </div>

      {/* FLEX OPTION */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex  h-96 gap-3 flex-col w-full basis-full sm:basis-1/2">
          <div className="bg-wh-500 h-full"></div>
          <div className="flex h-full gap-3">
            <div className="flex basis-1/2 bg-wh-500 h-full"></div>
            <div className="flex basis-1/2 bg-wh-500 h-full"></div>
          </div>
        </div>
      </div> */}
      {/* GRIP OPTION */}

      <div className="grid gap-5 grid-cols-4 sm:grid-rows-2 h-[600px] my-3">
        <div className="col-span-4 row-span-auto sm:col-span-2 sm:row-span-2 bg-wh-500"></div>
        <div className="col-span-4 row-span-auto sm:col-span-2 sm:row-span-1 bg-wh-500"></div>
        <div className="col-span-4 row-span-auto sm:col-span-1 sm:row-span-1 bg-wh-500"></div>
        <div className="col-span-4 row-span-auto sm:col-span-1 sm:row-span-1 bg-wh-500"></div>
      </div>
    </section>
  );
};

export default Trending;
