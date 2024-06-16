import React from "react";
import logoImg from '../../assets/images/saturn.png'
import './styles.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id='navbar'>
                    <div className="nav-brand">
                        <img src={logoImg} alt="saturn" />
                        <h1>Front-end - Coders 2024</h1>
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contador">Contador</Link></li>
                        <li><Link to="/formulario">Formulário</Link></li>
                        <li><a href="https://github.com/mp-lacerda-lopes/Ada-Santander-Coders-24" target="_blank">Repositório Github</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;
