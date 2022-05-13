import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/lucassilvadev/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/lucassilva-dev"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/luucas_sillva_/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
