import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
      <img src="https://avatars2.githubusercontent.com/u/2917521?s=460&u=4ca68788f5f0dd61f637167959f8b060e26ea38a&v=4" alt="Marcus Paulo" />
        <div>
          <strong>Marcus Paulo</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Aulas de programção Java
        <br /><br />
        Descrição ....
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;