import * as React from 'react';
import {TextField, Button} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import Display from '../Display';

export default function Formulario(){

    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    const [requests, setRequests] = useState('')
    const [Login, setLogin] = useState(false)


    const handleForm = event => {
        event.preventDefault()
        
        const obj = {
            username: name,
            password: senha,
        }
        
        axios.post('https://kenzieshop.herokuapp.com/sessions/', obj).then((response) => {
            setRequests('Autenticado com Sucesso!!!')  
            setLogin(true)          
        })
        .catch((err) =>{
            setRequests('Erro na autenticação')
            setLogin(false)          
        })
    }

    return (
        <div className={Login? 'verde' : 'vermelho'}>
            <form onSubmit={handleForm}>
                <div className="labelText">
                    <TextField label="Nome" color="primary" variant="outlined" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="labelText">
                    <TextField type="password" label="Senha" color="primary" variant="outlined" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <Button type="submit" className="botao" variant="contained">Entrar</Button>
            </form>
            <Display requests={requests} Login={Login}/>
        </div>
    )
}

