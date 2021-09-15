import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, password});
        }
        }>
            <TextField
                id="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
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