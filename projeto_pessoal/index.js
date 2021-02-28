function validar () {
    const name = formulario.nome.value
    const email = formulario.email.value
    const senha = formulario.senha.value
    const senhaConfirma = formulario.senhaConfirma.value
    const salaEscolhida = formulario.salaEscolhida.value

    const dadosClientes = 
        {name,
        email,
        senha,
        senhaConfirma,
        salaEscolhida}

    localStorage.setItem('Dados', JSON.stringify(dadosClientes));
}