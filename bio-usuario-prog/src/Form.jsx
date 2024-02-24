import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import PopUp from "./popup";

const form = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [err, setErr] = useState('')
    const [animP, setP] = useState(false)

    function sendEmail(e){
        const popAnim = document.getElementById('ppu');
        if(name === '' || email === ''){
            //alert("Preencha os campos de informaçõe!")
            // popAnim.style.animation = 'saindo 1s ease-in-out forwards'
            setP(true)
            if(animP == true){
                popAnim.style.animation = 'entrando 1s ease-in-out forwards'
                setErr("Preencha o formulario")
            }

        }

        const templataParams = {
            from_name: "usuario_progamador",
            to_name: name,
            email: email,
        }

        emailjs.send("service_mfewnq1", "template_rz5318r", templataParams, "pKUMDuXrCcqPpNkvq")
        .then((response) => {
            setErr("Enviando")
            popAnim.style.animation = 'saindo 1s ease-in-out forwards'
            console.log("Email enviado!", response.status, response.text)
            setEmail("")
            setName("")
            setP(false)
        }, (erro) => {
            console.log("erro" , erro)
            if(name != "" && email != ""){
                //  popAnim.style.animation = 'saindo 1s ease-in-out forwards'
                setP(true)
                if(animP == true){
                    popAnim.style.animation = 'entrando 1s ease-in-out forwards'
                    setErr("Dados invalidos")
                }
            }

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
            <PopUp>{err}</PopUp>
        </div>
        
    )
}

export default form;