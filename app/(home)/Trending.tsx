import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} relative mt-7 block w-full h-96 sm:mt-0 sm:h-auto hover:opacity-50`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-wh-900">image </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual cursor-pointer"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3 cursor-pointer">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          Category
        </h4>
        <div className="text-wh-100 mt-2 text-wh-50">Post Titles</div>
      </div>
    </Link>
  );
};

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

      <div className="grid gap-5 grid-cols-4 sm:grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="cursor-pointer col-span-4 row-span-auto sm:col-span-2 sm:row-span-2"></TrendingCard>
        <TrendingCard className="cursor-pointer col-span-4 row-span-auto sm:col-span-2 sm:row-span-1"></TrendingCard>
        <TrendingCard className="cursor-pointer col-span-4 row-span-auto sm:col-span-1 sm:row-span-1"></TrendingCard>
        <TrendingCard className="cursor-pointer col-span-4 row-span-auto sm:col-span-1 sm:row-span-1"></TrendingCard>
      </div>
    </section>
  );
};

export default Trending;
