import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COL */}
        <div className=" text-center justify-center items-center basis-1/2 sm:mt-0 sm:text-left sm:justify-start ">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            atque, cupiditate beatae quod in incidunt. Nulla iure unde
            repellendus soluta.
          </p>
          <p>&copy; Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COL */}
        <div className=" text-center justify-center items-center mt-16 basis-1/4 sm:mt-0 sm:text-left sm:justify-start">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        {/* THIRD COL */}
        <div className=" text-center justify-center items-center mt-16 basis-1/4 sm:mt-0 sm:text-left sm:justify-start">
          <h4 className="font-bold">Info</h4>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
