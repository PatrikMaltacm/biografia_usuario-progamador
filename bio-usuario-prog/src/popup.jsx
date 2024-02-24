import React from "react";
import { useState } from "react";
import "./Form.css";

const PopUp = (props) =>{
    const [msg, setMsg] = useState('Preencha todos os campos!')

    return(
        <span className="popup-debug" id="ppu">
            <h1 className="msg-pop">{props.children}</h1>
        </span>
    )

}

export default PopUp;