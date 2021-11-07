import React from "react";
import './Card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    //props é somente leitura!
    //props.titulo = "outro titulo";

    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer" style={{backgroundColor: props.color}}>
             {props.titulo}
        </div>
        
    </div>