import React from "react";
import { Link } from "react-router-dom";
import "./Form.css"


const form = () =>{
    return(
        <div className="container">
            <h1>Preencha o formulario abaixo</h1>
            <h3>para receber o ebook direto no seu email</h3>
            <nav>
                <Link to="/biografia_usuario-progamador/">Home</Link>
            </nav>
        </div>
    )
}

export default form;