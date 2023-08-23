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
    //Printando na tela a primeira questão do Array
    let headerQuestao = criaTitleQuestoes(allQuestoes[0].numQuestao);
    let enunciado = criaEnunciadoQuestao(allQuestoes[0].titulo);
    questoesInfoContainer.appendChild(headerQuestao);
    questoesInfoContainer.appendChild(enunciado);

    let numAlternativa = 0;

    allQuestoes[0].alternativas.sort((a,b) => a.ordem - b.ordem).map((alternativas)=>{    
      
      numAlternativa++
      
      let alternativasContent = criaAlternativas(allQuestoes[0].numeros[numAlternativa - 1].alternativaId, alternativas.questaoText);

      questoesInfoContainer.appendChild(alternativasContent);
  
    });

    
    ilustraQuestaoContainer.innerHTML = `<img src="${allQuestoes[0].ilustraQuestao}" alt="">`;
    statusQuestaoContainer.innerHTML = `<img class="img-status" src="${allQuestoes[0].statusQuestao}" alt="">`

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const radioButtons = document.querySelectorAll('input[name="alternativas"]');
    let divAlternativa = document.querySelectorAll(".each-alternativa");
    let textoEnunciado = document.querySelector(".texto-enunciado");
    let numeroDaQuestao = document.querySelector(".indicador-questao");
    let textALternativa = document.querySelectorAll(".texto-alternativa")
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


    function chamaProximaQuestao(){
      // Aimenta qtde de click
      click++;

      for (let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked){

          radioButtons[i].checked = false;
          arrDivQuestao[i].style = styleAlternativasNaoSelecionadas;

        }
        
      }

      //Chama a proxima questão até os objetos acabarem
      if(click < allQuestoes.length){
        embaralhaQuestao(click);
        
        textoEnunciado.innerHTML = allQuestoes[click].titulo;
        numeroDaQuestao.innerHTML = `Questão ${allQuestoes[click].numQuestao}`;

        ilustraQuestaoContainer.innerHTML = `<img src="${allQuestoes[click].ilustraQuestao}" alt="">`;
        statusQuestaoContainer.innerHTML = `<img class="img-status" src="${allQuestoes[click].statusQuestao}" alt="">`

        
        for(let i = 0; i < allQuestoes[click].alternativas.length; i++){
            textALternativa[i].innerHTML = allQuestoes[click].alternativas[i].questaoText;
            //numeroAlternativa[i].innerHTML = i+1;
            //radioButtons[i].value = allQuestoes[click].alternativas[i].questaoCorreta;
            //arrDivQuestao[i].dataset.value = allQuestoes[click].alternativas[i].questaoCorreta;
            //arrDivNumeros[i].dataset.check = allQuestoes[click].alternativas[i].questaoCorreta;
            //arrLabelsAlternativas[i].dataset.label = allQuestoes[click].alternativas[i].questaoCorreta;
        }
      }

      // Quando objetos acabarem atualiza o localStorage de qtde de questoes certas e de questões (apenas com as respondidas erradas)
      if(click === allQuestoes.length){
        //localStorage.setItem(`questoesCorretasBloco${currentBloco}`, questoesCorretas);
        //localStorage.setItem(`modifiedQuestoes${currentBloco}`, JSON.stringify(arrayModifiedQuestoes));
        //localStorage.setItem('buttonIdStorage', currentBloco);
        //localStorage.setItem(`blocoIniciado${currentBloco}`, true);

        /* Usar: https://apps.univesp.br/100-conceitos-contabilidade/pages/gabarito.html quando subir no servidor */
        window.location.href = 'http://127.0.0.1:5500/resultado.html';
      }
    }


    function embaralhaQuestao(n){
      allQuestoes[n].alternativas.sort((a,b) => a.ordem - b.ordem);
    }

    //Setters
    botaoAvancar.addEventListener('click', chamaProximaQuestao);

})
