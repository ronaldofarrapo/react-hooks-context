import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

function DadosEntrega({aoEnviar}) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField
                id="CEP"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="endereco"
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                label="Endereco"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth            
            />
            <TextField
                id="numero"
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                label="Numero"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="estado"
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="cidade"
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega;