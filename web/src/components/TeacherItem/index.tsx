import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/60068389?s=460&u=10f42d7898a6c0981427613e964b64a1d563b1da&v=4" alt="Daniel Wojcickoski" />
                <div>
                    <strong>Daniel Wojcickoski</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Eu não sou uma pessoa muito boas com descrições.
                <br /><br />
                Mas sou bom com programação
                </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                 </button>
            </footer>
        </article>
    )
}

export default TeacherItem;