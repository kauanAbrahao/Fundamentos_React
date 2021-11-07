import React, {useState} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
    const [nome, setNome] = useState('Pedro');
    
    return (
        <>
            <h1>{nome}</h1>
            <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)} />
        </>
    );  
};