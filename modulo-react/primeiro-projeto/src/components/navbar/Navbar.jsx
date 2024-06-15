import React from "react";
import logoImg from '../../assets/images/saturn.png'
import './styles.css'

import { Link } from 'react-router-dom'; //importando o react router

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id='navbar'>
                    <div className="nav-brand">
                        <img src={logoImg} alt="saturn" /> {/* Fazendo o fechamento da tag */}
                        <h1>Front-end - Coders 2024</h1>
                    </div>
                    
                    <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="">Contador</a></li>
                    <li><a href="/">Formuário</a></li>
                    <li><a href="https://github.com/mp-lacerda-lopes/Ada-Santander-Coders-24" target="_blank">Repositório Github</a></li>
                </ul>
                </nav>
            </header>
        )
    }
}




export default Navbar