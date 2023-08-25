// Definindo as frases de acerto (De acordo com a qtde de questões acertadas)

const frase1 = 'Você pode não ter começado tão bem, mas não desista. Que tal tentar responder as questões novamente?';
const frase2 = 'Você conhece um pouco sobre contratos, mas pode aprender mais. Que tal tentar responder as questões novamente?';
const frase3 = 'Você está no caminho certo! Você tem um bom conhecimento sobre contratos.';
const frase4 = 'Muito bem! Você está quase no topo! Seus conhecimentos sobre contratos estão acima da média.';
const frase5 = 'Excelente! Parabéns! Você tem um ótimo conhecimento sobre contratos!';

// Setando elementos para renderização condicional
const estrelasResultado = document.querySelector("#estrelasResultado");
const textoResultado = document.querySelector(".texto-resultado");
const fraseResultado = document.querySelector(".detalhe-resultado");
const botaoRefazerTeste = document.querySelector("#refazerTeste");
const botaoReiniciarTeste = document.querySelector("#reiniciaTeste")

// Puxando quantidade de questões acertadas do local storage
const getQuestoesCorretas = localStorage.getItem('questoesCorretasObjetos');
let qtdeQuestoesCorretas = JSON.parse(getQuestoesCorretas);
let questoesCorretasResultado = JSON.stringify(qtdeQuestoesCorretas);
let questoesCorretas = parseInt(questoesCorretasResultado);


// Realizando renderização condicional

  // Texto - Titulo
  if(questoesCorretas < 10){
    botaoReiniciarTeste.style.display = 'none';
    textoResultado.innerHTML = `Você acertou ${questoesCorretasResultado} de 10 questões!`;
  }else if(questoesCorretas === 10){
    botaoRefazerTeste.style.display = 'none';
    textoResultado.innerHTML = `Você acertou todas as questões!`;
  }

  $('#reiniciaTeste').click(function(){
    localStorage.removeItem('modifiedQuestoes');

    // Usar https://apps.univesp.br/tipos-de-contrato/teste.html quando subir no servidor
    window.location.href = 'http://127.0.0.1:5500/teste.html';
  })


  // Estrelas
if(questoesCorretas <= 3){
  estrelasResultado.setAttribute('src', 'https://apps.univesp.br/tipos-de-contrato/assets/estrelas-01.svg')
} else if(questoesCorretas > 3 && questoesCorretas <= 7){
  estrelasResultado.setAttribute('src', 'https://apps.univesp.br/tipos-de-contrato/assets/estrelas-02.svg')
} else if(questoesCorretas > 7 && questoesCorretas <= 10){
  estrelasResultado.setAttribute('src', 'https://apps.univesp.br/tipos-de-contrato/assets/estrelas-03.svg')
}

  // frase do Resultado
if(questoesCorretas <= 3){
  fraseResultado.innerHTML = frase1;
} else if(questoesCorretas > 3 && questoesCorretas <= 5){
  fraseResultado.innerHTML = frase2;
} else if(questoesCorretas > 5 && questoesCorretas <= 7){
  fraseResultado.innerHTML = frase3;
} else if(questoesCorretas > 7 && questoesCorretas <= 9){
  fraseResultado.innerHTML = frase4;
} else if(questoesCorretas === 10){
  fraseResultado.innerHTML = frase5;
}