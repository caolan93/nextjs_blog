import Link from "next/link";
import React from "react";

type Props = {
  className: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
        <div className="basis-full">
          <Link href="/">
            <h4
              className={`font-bold hover:text-accent-green ${
                isSmallCard ? "text-base line-clamp-2" : "text-lg"
              }`}
            >
              Title
            </h4>
          </Link>
        </div>
      </Link>
      <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
        <h5 className="font-semibold text-xs">Author</h5>
        <h6 className="text-wh-300 text-xs">Date</h6>
      </div>
      <p
        className={`text-wh-500 ${
          isLongForm ? "line-clamp-5" : "line-clamp-3"
        }`}
      >Snippet/p>
    </div>
  );
};

export default Card;
