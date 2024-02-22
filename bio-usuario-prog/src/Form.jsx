import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { useState } from "react";
import emailjs from '@emailjs/browser'

const form = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function sendEmail(e){

        if(name === '' || email === ''){
            alert("Preencha os campos de informaçõe!")
        }

        const templataParams = {
            from_name: "usuario_progamador",
            to_name: name,
            email: email,
        }

        emailjs.send("service_7wuin2a", "template_claiot6", templataParams, "4DC-ZI9NI0zsJdsgb")
        .then((response) => {
            console.log("Email enviado!", response.status, response.text)
            setEmail("")
            setName("")
        }, (erro) => {
            console.log("erro" , erro)
        })
    }

    return(
        <div className="root-form">
            <h1 className="title-form">Preencha o formulario para receber o Ebook direto no seu email</h1>
            <div className="form-div">
                
                <input type="text"  placeholder="Nome" className="inpt" onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="text" placeholder="Email" className="inpt" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <button type="button" className="btn" onClick={sendEmail}>Enviar</button>
            </div>
        </div>
    )
}

export default form;