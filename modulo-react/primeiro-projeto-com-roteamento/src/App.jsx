import React from "react";
import './syles/app.css'
import Navbar from "./components/navbar/Navbar";
import { Article } from "./components/Article/Article";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importando imagens
import article1Img from '../src/assets/images/article01.png'
import article2Img from '../src/assets/images/article02.png'
import article3Img from '../src/assets/images/article03.png'
import article4Img from '../src/assets/images/article04.png'
import article5Img from '../src/assets/images/article05.png'
import { Counter } from "./components/counter/Counter";
import { Formulario } from "./components/formulario/Formulario";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <section id='articles'>
              <h1>Programação Front-end - Santander Coders 2024</h1>

              <Article
                tittle='HTML'
                provider='Ada tech'
                description='É a linguagem padrão para criar e estruturar conteúdo na web, utilizando tags para definir elementos como títulos, parágrafos, imagens e links.'
                thumbnail={article1Img}
              />

              <Article
                tittle='CSS'
                provider='Ada tech'
                description='Responsável pela apresentação e estilo dos elementos HTML, permitindo controlar layout, cores, fontes e animações para melhorar a aparência e a usabilidade dos sites.'
                thumbnail={article2Img}
              />

              <Article
                tittle='JavaScript'
                provider='Ada tech'
                description='Linguagem de programação essencial para o desenvolvimento web, utilizada para criar interatividade dinâmica nos sites, manipular elementos da página, realizar validações e conectar com APIs.'
                thumbnail={article3Img}
              />

              <Article
                tittle='React'
                provider='Ada tech'
                description='Biblioteca JavaScript de código aberto mantida pelo Facebook, utilizada para construir interfaces de usuário (UI) escaláveis e interativas, baseadas em componentes reutilizáveis. Utiliza o conceito de Virtual DOM para melhorar a performance das aplicações.'
                thumbnail={article4Img}
              />

              <Article
                tittle='Angular'
                provider='Ada tech'
                description='Framework JavaScript desenvolvido pelo Google, utilizado para criar aplicativos web single-page (SPAs) e aplicativos móveis. Utiliza o conceito de data binding bidirecional para automatizar a sincronização entre o modelo e a view, facilitando o desenvolvimento de aplicações complexas.'
                thumbnail={article5Img}
              />
            </section>
          } />
          <Route path="/contador" element={
            <section id='contador'>
              <Counter />
            </section>
          } />
          <Route path="/formulario" element={
            <section id='form'>
              <Formulario />
            </section>
          } />
        </Routes>
      </Router>
    );
  }
}

export default App;
