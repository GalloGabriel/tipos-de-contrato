let criaTitleQuestoes = function(numQuestao){
  let titleQuestao = document.createElement("div");
  titleQuestao.classList.add("numero-questao");

  let imgTitleQuestao = document.createElement("img");
  imgTitleQuestao.setAttribute('src', 'https://apps.univesp.br/tipos-de-contrato/assets/icone-questao.svg');

  let spanTitle = document.createElement("span");
  spanTitle.classList.add("indicador-questao");
  spanTitle.innerHTML = `Questão ${numQuestao}`;

  titleQuestao.appendChild(imgTitleQuestao);
  titleQuestao.appendChild(spanTitle);  

  return titleQuestao;
}

let criaEnunciadoQuestao = function(enunciadoQuestao){
  let textoEnunciado = document.createElement("p");
  textoEnunciado.classList.add('texto-enunciado');
  textoEnunciado.innerHTML = enunciadoQuestao;

  return textoEnunciado;
}

let criaAlternativasContainer = function(){
  let alternativasContainer = document.createElement("div");
  alternativasContainer.classList.add("alternativas-container");

  return alternativasContainer;
}

let criaAlternativas = function(numeroAlternativa, textoAlternativa, checkCorreta){
  let eachAlternativa = document.createElement("div");
  eachAlternativa.classList.add("each-alternativa");

  let numAlternativa = document.createElement("div");
  numAlternativa.classList.add("num-alternativa");
  numAlternativa.innerHTML = numeroAlternativa;

  let alternativa = document.createElement("label");
  alternativa.classList.add("alternativa");

  let inputAlternativa = document.createElement("input");
  inputAlternativa.setAttribute("type", "radio");
  inputAlternativa.setAttribute("name", "alternativas");
  inputAlternativa.setAttribute("value", `${checkCorreta}`)
  inputAlternativa.classList.add("isHidden");

  let textAlternativa = document.createElement("span");
  textAlternativa.classList.add("texto-alternativa");
  textAlternativa.innerHTML = textoAlternativa;

  alternativa.appendChild(inputAlternativa);
  alternativa.appendChild(textAlternativa);

  eachAlternativa.appendChild(numAlternativa);
  eachAlternativa.appendChild(alternativa);

  return eachAlternativa
}

let criaImgStatus = function(statusLink){
  let status = document.createElement("img");
  status.classList.add("img-status");
  status.setAttribute('src', `${statusLink}`);

  return status;
}