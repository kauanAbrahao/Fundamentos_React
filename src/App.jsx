import React from "react";

import './index.css'
import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (

    /* ao usar as tags, estamos instanciando os componentes */
    <div className="App">

        <Card titulo = " #01.Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

        <Card titulo = "#02.Componente com Parâmetro">
            <ComParametro titulo = "Meu título"
                subtitulo="Meu subtítulo"/>
        </Card>

        <Card titulo = "#03.Componente com Filhos">
            <ComFilhos> 
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                </ul>
                </ComFilhos>
        </Card>

        <Card titulo = "#04. Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo= "#05. Condicional">
            <Condicional numero = {Math.floor(Math.random() * (10 - 0 +1))}/>
        </Card>

    
        {/*
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
            </ul>
        </ComFilhos>
        <Primeiro></Primeiro>
        <ComParametro titulo = "Meu título"
            subtitulo="Meu subtítulo"/>
        */}

    </div>

)
