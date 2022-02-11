import React, {Component} from 'react'
class App extends Component {
    state = {
        gostos:[
            {
              cor:"preto",
            musica: "sertanejo",
            comida: "strogonoff",
            },
            { 
              cor:"rosa",
              musica: "pagode",
              comida: "churrasco",
            },
            { 
              cor:"azul",
              musica: "rap",
              comida: "macarronese",
            },
            { 
              cor:"branco",
              musica: "pop",
              comida: "bife com fritas",
            },
            { 
              cor:"amarelo",
              musica: "classica",
              comida: "lasanha",
            },
            { 
              cor:"verde",
              musica: "funk",
              comida: "salpicao",
            },
        ]
    }
    
    render(){
        return(
            <main>
            {this.state.gostos.map((item) => (
                <div>
<h1>A cor preferida dessa pessoa é: {item.cor}, o gosto musical é: {item.musica} e a comida é: {item.comida}</h1>
                </div>
            ))}
            </main>
        )
    }
}

export default App