import React from "react";
import Image from "next/image";

// Assets
import Twitter from "@assets/social_twitter.png";
import Instagram from "@assets/social_instagram.png";
import Facebook from "@assets/social_facebook.png";
import Discord from "@assets/social_discord.png";
import Google from "@assets/social_google.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank">
        <Image
          alt="twitter icon"
          className={isDark ? "brightness-0" : "hover:opacity-50"}
          width={20}
          height={20}
          src={Twitter}
        />
      </a>
      <a href="https://instagram.com" target="_blank">
        <Image
          alt="instagram icon"
          className={isDark ? "brightness-0" : "hover:opacity-50"}
          width={20}
          height={20}
          src={Instagram}
        />
      </a>
      <a href="https://facebook.com" target="_blank">
        <Image
          alt="facebook icon"
          className={isDark ? "brightness-0" : "hover:opacity-50"}
          width={20}
          height={20}
          src={Facebook}
        />
      </a>
      <a href="https://discord.com" target="_blank">
        <Image
          alt="discord icon"
          className={isDark ? "brightness-0" : "hover:opacity-50"}
          width={20}
          height={20}
          src={Discord}
        />
      </a>
      <a href="https://google.com" target="_blank">
        <Image
          alt="google icon"
          className={isDark ? "brightness-0" : "hover:opacity-50"}
          width={20}
          height={20}
          src={Google}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
