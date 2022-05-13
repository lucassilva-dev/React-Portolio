/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footerPosition">
      <a href="#" className="footer__logo">
        LUCAS SILVA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Página Inicial</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/luucas_sillva_/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Lucas20718180">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/lucassilvadev/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Lucas Silva.All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
