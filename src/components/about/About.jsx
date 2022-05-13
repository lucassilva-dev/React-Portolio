/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/Eu1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Saiba Mais</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>1+ anos de Trabalho</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>200+ Clientes</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ Completos</small>
            </article>
          </div>

          <p>
            {" "}
            Mais de um ano que comecei nessa carreira onde sou apaixonado
            aprimorando e desenvolvendo meu conhecimento com novos desafios e
            projetos, esse portfólio é um exemplo disso, pretendo futuramente
            impactar o mundo com o meu código! Estou à um semestre da graduação
            em Sistemas da informação e já não vejo a hora de pegar meu diploma
            para começar a pós.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
