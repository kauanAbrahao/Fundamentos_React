/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {

    return (
    <div>
        <button onClick = {(e) => props.clique(Math.random)}>Altera valor do Pai</button>
    </div>
    );
}

