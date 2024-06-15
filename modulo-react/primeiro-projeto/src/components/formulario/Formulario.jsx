import React from "react";
import "../formulario/form.css"

export class Formulario extends React.Component {
    constructor() {
        super()
            this.state = { name: '', password: '' }
        
    }


    render() {
        return (
            <div id='form'>
                <h1>Formulário</h1>
                <p>Um formulário em React ilustra como lidar com entrada de dados do usuário de maneira controlada e reativa. Os conceitos principais envolvidos incluem:</p>
                <ul>
                    <li><strong>Estado (State):</strong> Utilizado para armazenar e controlar os dados do formulário, como o nome e senha neste exemplo.</li>
                    <li><strong>Eventos (Events):</strong> Eventos como onChange são utilizados para capturar e responder às mudanças nos campos de entrada, atualizando o estado correspondente.</li>
                    <li><strong>Renderização Condicional:</strong> Condicionalmente renderiza elementos com base no estado atual, por exemplo, exibindo mensagens de erro ou sucesso ao enviar o formulário.</li>
                    <li><strong>Gerenciamento de Formulário:</strong> Manipulação de submissões de formulário, incluindo validação de entrada antes do envio e execução de ações específicas, como enviar dados para um servidor.</li>
                </ul>

                <form id="login-senha" action="">
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    value={this.state.name} 
                    onChange={(event) => {
                        this.setState({name: event.target.value})
                    }
                    } />

                    <input 
                    type="password" 
                    placeholder="Senha" 
                    value={this.state.password} 
                    onChange={(event) => {
                        this.setState({password: event.target.value})
                    }

                    }
                    
                    />

                    <button id='enviar'>Enviar</button>
                </form>

            </div>


        )
    }



}