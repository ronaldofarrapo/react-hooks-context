import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erros, setErros] = useState({password: {valido: true, texto: ""}});
    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);

        setErros(novoEstado);
    }    

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, password});
            }
        }
        }>
            <TextField
                id="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                name="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.password.valido}
                helperText={erros.password.texto}
                name="password"
                label="password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    )

}

export default DadosUsuario