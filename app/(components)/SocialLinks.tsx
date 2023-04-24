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
          className={`${isDark} ? "brighness-0" : hover:opactity-50`}
          width={20}
          height={20}
          src={Twitter}
        />
        <Image
          alt="instagram icon"
          className={`${isDark} ? "brighness-0" : hover:opactity-50`}
          width={20}
          height={20}
          src={Instagram}
        />
        <Image
          alt="facebook icon"
          className={`${isDark} ? "brighness-0" : hover:opactity-50`}
          width={20}
          height={20}
          src={Facebook}
        />
        <Image
          alt="discord icon"
          className={`${isDark} ? "brighness-0" : hover:opactity-50`}
          width={20}
          height={20}
          src={Discord}
        />
        <Image
          alt="google icon"
          className={`${isDark} ? "brighness-0" : hover:opactity-50`}
          width={20}
          height={20}
          src={Google}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
