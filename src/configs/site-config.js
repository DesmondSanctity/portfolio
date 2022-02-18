import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Desmond Obisi. All Rights Reserved.`,
  author: {
    name: "Desmond Obisi",
    accounts: [
      {
        url: "https://github.com/DesmondSanctity",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/desmondcutest",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dexcodes.hashnode.dev/",
        label: "Blog Account",
        type: "gray",
        icon: <SiHashnode />
      },
      {
        url: "https://www.linkedin.com/in/desmond-obisi-253ab7161/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:desmondcutest@gmail.com",
        label: "Desmond Obisi",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
