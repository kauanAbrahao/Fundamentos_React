import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <span>Par</span>
            <span>Ímpar</span>
        </div>
    )
}