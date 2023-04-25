import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="px-5 py-2 text-wh-50 bg-wh-900 text-sm font-bold">
        Subscribe and Follow!
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">advert image</div>
      <h4 className="px-5 py-2 text-wh-50 bg-wh-900 text-sm font-bold text-center">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8">Profile image</div>
      <h4 className="px-5 py-2 text-wh-500 bg-wh-50 text-sm font-bold text-center">
        Geoffry Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        dolorem?
      </p>
    </section>
  );
};

export default Sidebar;
