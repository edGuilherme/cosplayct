import React from 'react';
import ReactLogo from '../assets/react.svg';
import './css/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <span className="routing">
                    <li>
                        <a href="/">LOGO</a>
                    </li>
                    <li>
                        <a href="/cosplayers">Cosplayers</a>
                    </li>
                    <li>
                        <a href="/acessorios">Acessórios</a>
                    </li>
                    <li>
                        <a href="/calendario">Calendário</a>
                    </li>
                </span>
                <li>
                    Pesquisa
                </li>
                <li className="perfil">
                    <a href="/login">
                        <img src={ReactLogo} alt="Perfil" />
                        <div className="login">
                            <div>Cadastre-se</div>
                            <div>Efetuar Login</div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
