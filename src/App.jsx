import React from "react";

import './index.css'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Form from './components/form/input'
import ImgViewer from './components/image-viewer/viewer'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (

    /* ao usar as tags, estamos instanciando os componentes */
    <div className="App">

        <Card titulo = "#01. Primeiro Componente" color="#d2fff1">
            <Primeiro></Primeiro>
        </Card>

        <Card titulo = "#02. Componente com Parâmetro" color="#fffbc6">
            <ComParametro titulo = "Meu título"
                subtitulo="Meu subtítulo"/>
        </Card>

        <Card titulo = "#03. Componente com Filhos" color = "#f1f1f1">
            <ComFilhos> 
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                </ul>
                </ComFilhos>
        </Card>

        <Card titulo = "#04. Repetição" color = "#ffe2f4" >
            <Repeticao></Repeticao>
        </Card>

        <Card titulo= "#05. Condicional" color = "#d4cdff">
            <Condicional numero = {Math.floor(Math.random() * (10 - 0 +1))}/>
        </Card>

        <Card titulo = "#7 - Comunicação direta" color = "#6495ed">
        <Pai sobrenome = "Martins"></Pai>
        </Card>

        <Card titulo = "#8 - Comunicação indireta" color = "#6918ff">
            <Super></Super>
        </Card>

        <Card titulo = "#9 - Input" color = "#eaa224">
            <Form></Form>
        </Card>

        <ImgViewer></ImgViewer>

        

    
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
