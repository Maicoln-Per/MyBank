let nomeUsuario = prompt("Qual é o seu nome?");
window.alert(`Olá ${nomeUsuario}, é um prazer tê-lo(a) por aqui!`);
let saldo = 550.99;
let senha = 3589; //Senha Global
let inserir_senha;
inicio();
function inicio() {
    let escolha = Number.parseInt(prompt('O quê deseja fazer?\n Selecione uma opção: \n1 ) Saldo \n2 ) Extrato \n3 ) Saque \n4 ) Depósito \n5 ) Transferência \n6 ) Trabalhar \n7 ) Comprar \n8 ) Sair'));
    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            ver_extrato();
            break;
        case 3:
            fazer_saque();
            break; 
        case 4:
            fazer_deposito();
            break;
        case 5:
            transferir();
            break;             
        case 6:
            trabalhar();
            break;
        case 7:
            comprar();
            break;
        case 8:
            sair();
            break;
        default:
            window.alert('Por favor, insira uma opção válida!');
            return inicio();
    }
}

function ver_saldo() {
    inserir_senha = Number.parseInt(prompt('Insira a sua senha: '));
    if (isNaN(inserir_senha) || inserir_senha != senha || inserir_senha === '') {
        window.alert('Senha Incorreta!\nTente Novamente.');
        return ver_saldo();
    } else {
        window.alert(`${nomeUsuario}, seu saldo atual é de: R$ ${saldo}`);
        return inicio();
    }
}

function fazer_deposito() {
    inserir_senha = Number.parseInt(prompt('Insira a sua senha: '));
    if (isNaN(inserir_senha) || inserir_senha != senha || inserir_senha === '') {
        window.alert('Senha Incorreta!\nTente Novamente.');
        return fazer_deposito();
    } else {
    let deposito = Number.parseFloat(prompt(`Qual o valor que deseja depositar?`));
    // Not a Number --> Isso é um não-número?
    if (isNaN(deposito) || deposito === '') {
        window.alert(`Por favor, informe um número válido para o depósito!`);
        fazer_deposito();
    } else {
        saldo += deposito;
        //saldo = saldo + deposito;
        return ver_saldo();
    }
    }
}

function fazer_saque() {
    inserir_senha = Number.parseInt(prompt('Insira a sua senha: '));
    if (isNaN(inserir_senha) || inserir_senha != senha || inserir_senha === '') {
        window.alert('Senha Incorreta!\nTente Novamente.');
        return fazer_saque();
    } else {
    let saque = Number.parseFloat(prompt(`Qual o valor que deseja sacar?`));

    if (isNaN(saque) || saque === '') {
        window.alert(`Por favor, informe um valor para o saque!`);
        fazer_saque();
    } else {
        if (saque > saldo) {
            window.alert(`Operação não autorizada.\nVocê não pode sacar uma quantidade maior que o seu saldo!`);
            return fazer_saque();
        } else if(saque <= 0) {
            window.alert(`Operação não autorizada.\nInforme um número maior que zero.`);
            return fazer_saque();
        } else {
                saldo -= saque;
                //saldo = saldo - saque;
                return ver_saldo();
            }
        }
    }
}
    
function trabalhar() {
    window.alert(`Trabalhando...`);
    const salario = 1550;
    window.alert(`Salário recebido: +${salario}`)
    saldo += salario;
    return ver_saldo();
}

function ver_extrato() {
    inserir_senha = Number.parseInt(prompt('Insira a sua senha: '));
    if (isNaN(inserir_senha) || inserir_senha != senha || inserir_senha === '') {
        window.alert('Senha Incorreta!\nTente Novamente.');
        return ver_extrato();
    } else {
        window.alert(`Extrato: \nSpotify 17-09-2023: R$ 21,90\nAmazon Prime 16-09-2023: R$ 14,90 \nAçougue 12-09-2023: R$175,50 \nMercado 09-09-2023: R$883,99 \nConta de luz 08-09-2023: R$87,00\nConta de água 06-09-2023: R$53,00`);
        return inicio();
    }
}

function transferir() { 
    inserir_senha = Number.parseInt(prompt('Insira a sua senha: '));
    if (isNaN(inserir_senha) || inserir_senha != senha || inserir_senha === '') {
        window.alert('Senha Incorreta!\nTente Novamente.');
        return transferir();
    } else {
        let conta_alternativa = Number.parseInt(prompt('Insira o número da conta que deseja para fazer a transferência: ')); 
        if (isNaN(conta_alternativa) || conta_alternativa === '') {
            window.alert('Conta inválida!\nTente Novamente.');
            return transferir();
        } else {
        let transferencia = Number.parseFloat(prompt('Insira o valor que deseja transferir: '));
        if (isNaN(transferencia) || transferencia === '') {
            window.alert('Operação não autorizada\nPor favor, informe um número.');
            return transferir();
        } else if (transferencia > saldo) {
            window.alert('Operação não autorizada\nO valor que está tentando transferir é maior que o seu saldo.');
            return transferir();
        } else if (transferencia <= 0) {
            window.alert('Operação não autorizada\nO valor que está tentando transferir é menor que zero.');
            return transferir();
        } else {
                saldo -= transferencia;
                //saldo = saldo - transferencia;
                window.alert(`Transação bem sucedida!\nSeu saldo atual é: ${saldo}`);
             }
        }
    }
}

function comprar() {
    let escolha_itens = Number.parseInt(prompt('O quê deseja comprar hoje?\n Selecione uma opção: \n1 ) Notebook  \n2 ) Livro \n3 ) Video-Game\n4 ) TV\n5 ) Sair'));
    switch (escolha_itens) {
        case 1:
            window.alert(`Notebook: R$ 1.900`);
            const notebook = 1900;
            if(saldo < notebook) {
                window.alert(`Saldo insuficiente.`);
            } else {
                saldo -= notebook;
                return ver_saldo();
                break;
            }
            return inicio();
            break;
        case 2:
            window.alert(`Livro: R$ 25,99`);
            const livro = 25.99;
            if(saldo < livro) {
                window.alert(`Saldo insuficiente.`);
            } else {
                saldo -= livro;
                return ver_saldo();
                break;
            }
            return inicio();
            break;
        case 3:
            window.alert(`Video Game: R$ 2.400`);
            const videoGame = 2400;
            if(saldo < videoGame) {
                window.alert(`Saldo insuficiente.`);
            } else {
                saldo -= videoGame;
                return ver_saldo();
                break;
            }
            return inicio();
            break;
        case 4:
            window.alert(`TV: R$ 2.985`);
            const tv = 2985;
            if(saldo < tv) {
                window.alert(`Saldo insuficiente.`);
            } else {
                saldo -= tv;
                return ver_saldo();
                break;
            }
            return inicio();
            break;
        case 5:
            return transferir();
            break;             
        default:
            window.alert('Por favor, insira uma opção válida!');
            return comprar();
    }
}
function sair() {
    let confirma = window.confirm(`Você deseja sair?`);
    if (confirma) {
        window.alert(`${nomeUsuario}, obrigado por utilizar os serviços do nosso banco!\nFoi um prazer tê-lo(a) por aqui. Volte sempre!`)
        return window.exit();
    } else {
        return inicio();
    }
}

