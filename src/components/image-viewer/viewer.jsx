import React, {useState} from "react";
import './style.css'
import Images from '../../Images';


// eslint-disable-next-line import/no-anonymous-default-export
export default function MyImages() {

    const [selectedImg, setSelectedImg] = useState(Images[0]);

    return(
        <div className="App">
            <div className="container">
                <img src={selectedImg} alt="Selecionada" className="selected" />
                <div className="imgContainer">
                    {Images.map((img, index) =>(
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img style={{border: selectedImg === img ? "4px solid white" : "" }}key={index} src={img}/>
                    ))}
                </div>
            </div>

        </div>

    )

};
