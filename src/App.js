import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";
import { validarCPF, validarSenha } from './models/cadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>

        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, password: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
