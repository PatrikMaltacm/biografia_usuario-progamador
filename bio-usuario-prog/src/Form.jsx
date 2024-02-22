import React from "react";
import { Link } from "react-router-dom";
import "./Form.css"


const form = () =>{
    return(
        <div className="root-form">
            <h1 className="title-form">Preencha o formulario para receber o Ebook direto no seu email</h1>
            <div className="form-div">
                
                <input type="text"  placeholder="Insira seu email" className="inpt"/>
                <input type="text" placeholder="Insira sua senha" className="inpt"/>
                <button type="button" className="btn">Enviar</button>
            </div>
        </div>
    )
}

export default form;