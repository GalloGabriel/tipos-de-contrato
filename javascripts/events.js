const questoesInfoContainer = document.querySelector(".questoes-infos");
const ilustraQuestaoContainer = document.querySelector(".ilustra-questao");
const statusQuestaoContainer = document.querySelector(".img-status-container");

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


    $('#startTeste').click(function(){
      $('.questoes-container').css('display', 'flex');
      $('.texto-inicial-container').css('display', 'none');
      $('.button-inicio-container').css('display', 'none');
      $('#iconeEstrela').css('position', 'relative');
      $('#iconeEstrela').css('top', '15px');
    })

})
