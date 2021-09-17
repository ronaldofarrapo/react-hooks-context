import { StepLabel, Stepper, Step, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validacoes }) {

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosAtualizados, setDadosAtualizados] = useState("");
 
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosAtualizados);
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={atualizarDados} />,
    <DadosPessoais aoEnviar={atualizarDados}  />,
    <DadosEntrega aoEnviar={atualizarDados}  />,
    <Typography variant="h5">Obrigado por se Cadastrar!</Typography>
  ];

  function atualizarDados(dados) {
    setDadosAtualizados({ ...dadosAtualizados, ...dados })
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados Pessoais</StepLabel></Step>
        <Step><StepLabel>Dados de Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
