/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import Sub from './Sub'

export default props => {

    const[valor, setValor] = useState(1);
    
    function alteraValor(valorRecebido){
        setValor(valorRecebido)
    }
    
    return (
        <div>
            <h4>Valor: {valor}</h4>
            <Sub clique = {alteraValor}></Sub>
        </div>
    );

};
