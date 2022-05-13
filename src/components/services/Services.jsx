import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services" className="position">
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Site Responsivo</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Vídeos e imagens sem limites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Personalizado</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Painel de administração</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Chat Pelo whatsapp</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Suporte</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>No ar em até 7 dias</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Muita segurança</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Código limpo e fácil para manutenção</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rápido tempo de resposta</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Baixo uso de memória</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Entrega em até 7 dias</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Suporte Vitalício</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publicações atrativas</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Criação de Mídia</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cores atrativas para o público</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Site Harmônico</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Arte de Divulgação</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
