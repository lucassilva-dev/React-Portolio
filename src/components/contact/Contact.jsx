import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9hskje",
        "template_7ljehus",
        form.current,
        "hEGNeBURJI0adVPU3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="positionContact">
      <h5>Entrar em contato</h5>
      <h2>Contate-Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lucasbr5@hotmail.com</h5>
            <a
              href="mailto:lucasfullstackdevolper@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Envie um Email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Lucas Silva</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=5531989545015&text&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Lucas Silva</h5>
            <a
              href="https://www.linkedin.com/in/lucassilvadev/"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma Mensagem
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
