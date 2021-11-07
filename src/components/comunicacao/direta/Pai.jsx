import React from "react";
import Filho from './Filho'


/*
    Na comunicação direta, o Pai passa diretamente a 
    propriedade ao filho.
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return (
    <div>
        {/* <!-- Comunicação direta -->*/}
        <Filho sobrenome = "Silva">João</Filho>
        <Filho {...props}>Maria</Filho>
        <Filho sobrenome = {props.sobrenome}>Joaquina</Filho>
    </div>

    );
}