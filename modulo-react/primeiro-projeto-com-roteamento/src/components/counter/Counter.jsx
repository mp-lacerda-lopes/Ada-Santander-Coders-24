import React from "react";
import "../counter/counter.css"

export class Counter extends React.Component {
    constructor() {
        super()
        //this.contador = 0; o react não atualiza as variáveis o tempo todo, pois ficaria pouco performático,
        // por isso será preciso criar a variável que preciso de atualizações como STATE
        this.state = { contador: 0} // funciona como objeto
    }

    render() {
        return (
            <div id='contador'>
                <h1>Contador</h1>
                <p>Um contador em React é uma aplicação simples, 
                    mas que encapsula diversos conceitos fundamentais da biblioteca. 
                    Ao implementar um contador, desenvolvedores aprendem a utilizar estados (state) 
                    para armazenar e atualizar dados dinâmicos, como o valor exibido no contador. 
                    Além disso, o contador ilustra como lidar com eventos de usuário, 
                    como cliques em botões para incrementar ou decrementar valores. 
                    Esse exercício não apenas reforça a modularidade e reutilização 
                    de componentes em React, mas também introduz práticas como 
                    renderização condicional e uso de hooks para efeitos secundários, 
                    proporcionando uma base sólida para desenvolver aplicações interativas na plataforma.</p>

                <h2 className="number">{this.state.contador}</h2>

                <div id='button'>
                    <button onClick={() => {
                        this.setState({contador: this.state.contador - 1})
                    } } 
                    className='count'>Diminuir</button>

                    <button onClick={() => {
                        this.setState({contador: this.state.contador + 1})
                    }
                    
                    }
                    
                    className='count'>Aumentar</button>

                </div>

            </div>


        )
    }



}