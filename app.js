function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);

        while (numerosSorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numero);
    }

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    desabilitarHabilitarBotao('btn-reiniciar', 'container__botao-desabilitado', 'container__botao', false);
    desabilitarHabilitarBotao('btn-sortear', 'container__botao', 'container__botao-desabilitado', true); 
    
    //alterarStatusBotao();
}

function reiniciar(){    

    desabilitarHabilitarBotao('btn-sortear', 'container__botao-desabilitado', 'container__botao', false);    
    desabilitarHabilitarBotao('btn-reiniciar', 'container__botao', 'container__botao-desabilitado', true);

    //alterarStatusBotao();

    limparCampos('quantidade');
    limparCampos('de');
    limparCampos('ate');

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

}

function limparCampos(idCampo){

    document.getElementById(idCampo).value = '';

}

function desabilitarHabilitarBotao(idBotao, remover, adicionar, disabledAtribute){

    if (disabledAtribute == true){
        const botao = document.getElementById(idBotao); 
        botao.setAttribute('disabled', true);      
        botao.classList.remove(remover);
        botao.classList.add(adicionar);
    } else {
        const botao = document.getElementById(idBotao); 
        botao.removeAttribute('disabled');      
        botao.classList.remove(remover);
        botao.classList.add(adicionar);
    }

}

//function alterarStatusBotao() {
//    let botao = document.getElementById('btn-reiniciar');
//
//    if (botao.classList.contains('container_botao-desabilitado')){
//        botao.classList.remove('container_botao-desabilitado');
//        botao.classList.add('container_botao');
//    } else {
//        botao.classList.remove('container_botao');
//        botao.classList.add('container_botao-desabilitado');
//    }
//}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}