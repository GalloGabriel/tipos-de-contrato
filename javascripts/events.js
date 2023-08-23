const questoesInfoContainer = document.querySelector(".questoes-infos");
const ilustraQuestaoContainer = document.querySelector(".ilustra-questao");
const statusQuestaoContainer = document.querySelector(".img-status-container");
const botaoAvancar = document.querySelector(".button-controler");

$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

    //Armazenando dados das questões no local Storage

     localStorage.setItem(`questoesStorageContratos`, JSON.stringify(allQuestoes));
     let inicioQuestoesStorage = localStorage.getItem(`questoesStorageContratos`);
     let questoesStorage = JSON.parse(inicioQuestoesStorage);

     //console.log(questoesStorage)



    //Printando na tela a primeira questão do Array
    let headerQuestao = criaTitleQuestoes(questoesStorage[0].numQuestao);
    let enunciado = criaEnunciadoQuestao(questoesStorage[0].titulo);
    questoesInfoContainer.appendChild(headerQuestao);
    questoesInfoContainer.appendChild(enunciado);

    let numAlternativa = 0;

    questoesStorage[0].alternativas.sort((a,b) => a.ordem - b.ordem).map((alternativas)=>{    
      
      numAlternativa++
      
      let alternativasContent = criaAlternativas(questoesStorage[0].numeros[numAlternativa - 1].alternativaId, alternativas.questaoText, alternativas.questaoCorreta);

      questoesInfoContainer.appendChild(alternativasContent);
  
    });

    
    ilustraQuestaoContainer.innerHTML = `<img src="${questoesStorage[0].ilustraQuestao}" alt="">`;
    statusQuestaoContainer.innerHTML = `<img class="img-status" src="${questoesStorage[0].statusQuestao}" alt="">`

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const radioButtons = document.querySelectorAll('input[name="alternativas"]');
    let divAlternativa = document.querySelectorAll(".each-alternativa");
    let textoEnunciado = document.querySelector(".texto-enunciado");
    let numeroDaQuestao = document.querySelector(".indicador-questao");
    let textALternativa = document.querySelectorAll(".texto-alternativa");
    let questoesCorretasStorage = localStorage.getItem(`questoesCorretasObjetos`);
    let qtdeQuestoesCorretasStorage = parseInt(questoesCorretasStorage);
    let questoesCorretas;
    let click = 0;

    const styleAlternativaSelecionada = `border: 1px solid #9D3B1F; background-color: #F6B597; transition: 0.4s; padding: 8px; border-radius: 10px; width: 100%;`;
    const styleAlternativaAcertada = `border: 3px solid #494672; background-color: #E3DCDE; transition: 0.4s; padding: 15px; border-radius: 10px; width: 98%;`;
    const styleAlternativasNaoSelecionadas = `border-color: transparent; background-color: transparent; transition: none`;


    let arrChecked = Array.from(radioButtons);
    let arrDivQuestao = Array.from(divAlternativa);

    for (let i = 0; i < arrChecked.length; i++) {
      arrChecked[i].addEventListener('change', function(){
  
        //botaoAvancar.disabled = false;
  
        if(arrChecked[i].checked){
  
          switch(i){
            case 0:
              arrDivQuestao[0].style = styleAlternativaSelecionada;
              arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
              arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
              break;
  
            case 1:
              arrDivQuestao[1].style = styleAlternativaSelecionada;
              arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
              arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
              break;
  
            case 2:
              arrDivQuestao[2].style = styleAlternativaSelecionada;
              arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
              arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
              break;
          }
          
        }
      })    
    }

    //Questões corretas sempre inica com 0 quando o bloco é iniciado
    if(!questoesCorretasStorage || questoesCorretasStorage){
      questoesCorretas = 0; 
    }


    function chamaProximaQuestao(){
      // Aimenta qtde de click
      click++;

      for (let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked){

          if(radioButtons[i].value === 'true'){
            questoesCorretas++;
            questoesStorage[click - 1].questaoFeitaCorreta = 'true';
            
          }else{
            questoesStorage[click - 1].questaoFeitaCorreta = 'false';
          }

          radioButtons[i].checked = false;
          arrDivQuestao[i].style = styleAlternativasNaoSelecionadas;

        }
        
      }

      //Chama a proxima questão até os objetos acabarem
      if(click < questoesStorage.length){
        embaralhaQuestao(click);
        
        textoEnunciado.innerHTML = questoesStorage[click].titulo;
        numeroDaQuestao.innerHTML = `Questão ${questoesStorage[click].numQuestao}`;

        ilustraQuestaoContainer.innerHTML = `<img src="${questoesStorage[click].ilustraQuestao}" alt="">`;
        statusQuestaoContainer.innerHTML = `<img class="img-status" src="${questoesStorage[click].statusQuestao}" alt="">`

        
        for(let i = 0; i < questoesStorage[click].alternativas.length; i++){
            textALternativa[i].innerHTML = questoesStorage[click].alternativas[i].questaoText;
            //numeroAlternativa[i].innerHTML = i+1;
            radioButtons[i].value = questoesStorage[click].alternativas[i].questaoCorreta;
            //arrDivQuestao[i].dataset.value = allQuestoes[click].alternativas[i].questaoCorreta;
            //arrDivNumeros[i].dataset.check = allQuestoes[click].alternativas[i].questaoCorreta;
            //arrLabelsAlternativas[i].dataset.label = allQuestoes[click].alternativas[i].questaoCorreta;
        }
      }

      // Quando objetos acabarem atualiza o localStorage de qtde de questoes certas e de questões (apenas com as respondidas erradas)
      if(click === questoesStorage.length){
        localStorage.setItem(`questoesCorretasObjetos`, questoesCorretas);
        //localStorage.setItem(`modifiedQuestoes${currentBloco}`, JSON.stringify(arrayModifiedQuestoes));
        //localStorage.setItem('buttonIdStorage', currentBloco);
        //localStorage.setItem(`blocoIniciado${currentBloco}`, true);

        /* Usar: https://apps.univesp.br/100-conceitos-contabilidade/pages/gabarito.html quando subir no servidor */
        window.location.href = 'http://127.0.0.1:5500/resultado.html';
      }
    }


    function embaralhaQuestao(n){
      questoesStorage[n].alternativas.sort((a,b) => a.ordem - b.ordem);
    }

    //Setters
    botaoAvancar.addEventListener('click', chamaProximaQuestao);

})
