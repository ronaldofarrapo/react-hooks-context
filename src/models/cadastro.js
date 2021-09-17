function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 digitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSenha(password) {
    if(password.length < 4 || password.length > 72){
        return { valido: false, texto: "A senha deve ter entre 4 e 72 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

export { validarCPF, validarSenha };
