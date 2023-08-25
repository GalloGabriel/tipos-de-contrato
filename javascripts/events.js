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

    // Cria array vazio que irá conter os dados trazidos do array de objetos na primeira vez que a página carregar
    let arrQuestoes = [];

    allQuestoes.map((questao)=>{
      arrQuestoes.push(questao);
    });

   // Define de qual localStorage iremos trazer os dados quando a página é carregada
    let inicioQuestoesStorage;

    //Armazenando dados das questões no local Storage

    // Se ainda não existir localStorage, cria 'questoesStorageContratos' com os dados do arrQuestoes e traz os dados dele
    if(!localStorage.getItem(`questoesStorageContratos`)){
      localStorage.setItem(`questoesStorageContratos`, JSON.stringify(arrQuestoes));
      inicioQuestoesStorage = localStorage.getItem(`questoesStorageContratos`);
    }

    // Se já existir localStorage 'questoesStorage' traz os dados dele
    else if(localStorage.getItem(`questoesStorageContratos`) && !localStorage.getItem(`modifiedQuestoes`)){
      inicioQuestoesStorage = localStorage.getItem(`questoesStorageContratos`);
    }

    // Se existir localStorage com as questoes modificadas (exercício já foi feito ao menos uma vez), traz dados de 'modifiedQuestoes'
    else{
      inicioQuestoesStorage = localStorage.getItem(`modifiedQuestoes`);
    }

    // Armazena questoes trazidas do localStorage
    let questoesStorage = JSON.parse(inicioQuestoesStorage);

    // Cria Array que irá armazenar questões nao feitas ou questões que foram marcadas erradas
    let currentQuestoes = [];

    // Mapeia questões do localStorage e armazena questões erradas ou que não foram feitas
    questoesStorage.map((item)=>{
    
      currentQuestoes.push(item);
    
    });
     

     console.log(currentQuestoes)



    //Printando na tela a primeira questão do Array
    let headerQuestao = criaTitleQuestoes(currentQuestoes[0].numQuestao);
    let enunciado = criaEnunciadoQuestao(currentQuestoes[0].titulo);
    questoesInfoContainer.appendChild(headerQuestao);
    questoesInfoContainer.appendChild(enunciado);

    let numAlternativa = 0;

    currentQuestoes[0].alternativas.sort((a,b) => a.ordem - b.ordem).map((alternativas)=>{    
      
      numAlternativa++
      
      let alternativasContent = criaAlternativas(currentQuestoes[0].numeros[numAlternativa - 1].alternativaId, alternativas.questaoText, alternativas.questaoCorreta, alternativas.questaoCorreta, alternativas.questaoCorreta, alternativas.questaoCorreta);

      questoesInfoContainer.appendChild(alternativasContent);
  
    });

    
    ilustraQuestaoContainer.innerHTML = `<img src="${currentQuestoes[0].ilustraQuestao}" alt="">`;
    statusQuestaoContainer.innerHTML = `<img class="img-status" src="${currentQuestoes[0].statusQuestao}" alt="">`

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const radioButtons = document.querySelectorAll('input[name="alternativas"]');
    let divAlternativa = document.querySelectorAll(".each-alternativa");
    let eachLabelAlternativa = document.querySelectorAll(".alternativa");
    let numeroDaAlternativa = document.querySelectorAll(".num-alternativa");
    let textoEnunciado = document.querySelector(".texto-enunciado");
    let numeroDaQuestao = document.querySelector(".indicador-questao");
    let textALternativa = document.querySelectorAll(".texto-alternativa");
    let questoesCorretasStorage = localStorage.getItem(`questoesCorretasObjetos`);
    let qtdeQuestoesCorretasStorage = parseInt(questoesCorretasStorage);
    let questoesCorretas;
    let click = 0;
    let inputsChecked = [];

    const styleAlternativaSelecionada = `border: 1px solid #9D3B1F; background-color: #F6B597; transition: 0.4s; padding: 8px; border-radius: 10px; width: 100%;`;
    const styleAlternativaAcertada = `border: 1px solid #467255; background-color: #C7D3C8; transition: 0.4s; padding: 15px; border-radius: 10px; width: 98%;`;
    const styleAlternativasNaoSelecionadas = `border-color: transparent; background-color: transparent; transition: none`;


    let arrChecked = Array.from(radioButtons);
    let arrDivQuestao = Array.from(divAlternativa);
    let arrDivNumeros = Array.from(numeroDaAlternativa);
    let arrLabelsAlternativas = Array.from(eachLabelAlternativa);

    for (let i = 0; i < arrChecked.length; i++) {
      arrChecked[i].addEventListener('change', function(){
  
        //botaoAvancar.disabled = false;

        arrDivNumeros.map((item)=>{
          item.style.backgroundColor = '#FFF';
        })
  
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

    //Verifica se usuário já acertou a questão atual.
    if(currentQuestoes[0].questaoFeitaCorreta === 'true'){
      //botaoAvancarContainer.style.display = 'flex';
      //botaoAvancar.style = buttonAvancarEnabledStyle;

      arrLabelsAlternativas.map((item)=>{
        if(item.dataset.label === 'true'){
          item.style.backgroundColor = '#FFF';
        }else{
          item.style.backgroundColor = '#FFE8DE';
        }
      });
      
      arrChecked.map((item)=>{
        if(item.value === 'true'){
          item.checked = true;
        }
      });
      
      arrDivQuestao.map((item)=>{
        item.style.pointerEvents = 'none';
        
        if(item.dataset.each === 'true'){
          item.style = styleAlternativaAcertada;
          item.style.pointerEvents = 'none';
        }
      });

      arrDivNumeros.map((item)=>{
        if(item.dataset.check === 'true'){
          item.innerHTML = `<img src="https://apps.univesp.br/tipos-de-contrato/assets/icone-acerto.svg" style="height: 33px">`;
          item.style = `border: 0;`;
          item.style.backgroundColor = '#C7D3C8';
        }else{
          item.style = `border: 2px solid #000`;
          item.style.backgroundColor = '#FFF';
        }
      })
      
    }
    
    else if(currentQuestoes[click].questaoFeitaCorreta === 'false'){
      //textQuestaoCertaContainer.style.display = 'none';

      arrDivQuestao.map((item)=>{
        item.style.pointerEvents = 'auto';
      });

      eachLabelAlternativa.forEach(e=>{
        e.style.backgroundColor = '#FFF';
      });

      arrDivNumeros.map((item)=>{
        item.style = `border: 2px solid #000`;
      })
      
    }

    //Questões corretas sempre inica com 0 quando o bloco é iniciado
    if(!questoesCorretasStorage || questoesCorretasStorage){
      questoesCorretas = 0; 
    }


    let arrayModifiedQuestoes = [];


    function chamaProximaQuestao(evt){

      // Define inputsChecked como um Array vazio
      inputsChecked.splice([]);

      // Se alguma alternativa estiver selecionada alimenta inputsChecked
      arrChecked.map((items)=>{
        if(items.checked){
          inputsChecked.push(items.checked)
        }
      })

      // Se NÃO houver alguma alternativa selecionada
      if(inputsChecked.length === 0){
        evt.preventDefault();
      }

      // Se houver alguma alternativa selecionada
      else{

        // Aimenta qtde de click
        click++;

        for (let i = 0; i < radioButtons.length; i++) {
          if(radioButtons[i].checked){

            if(radioButtons[i].value === 'true'){
              questoesCorretas++;
              currentQuestoes[click - 1].questaoFeitaCorreta = 'true';
              
            }else{
              currentQuestoes[click - 1].questaoFeitaCorreta = 'false';
            }

            radioButtons[i].checked = false;
            arrDivQuestao[i].style = styleAlternativasNaoSelecionadas;

            let modifiedQuestoes = [
              {
                "questaoId": currentQuestoes[click - 1].questaoId,
                "titulo": currentQuestoes[click - 1].titulo,
                "questaoFeitaCorreta": currentQuestoes[click - 1].questaoFeitaCorreta,
                "ilustraQuestao": currentQuestoes[click-1].ilustraQuestao,
                "statusQuestao": currentQuestoes[click-1].statusQuestao,
                "numQuestao": currentQuestoes[click-1].numQuestao,
    
                "numeros": [
                  {"alternativaId": 1},
                  {"alternativaId": 2},
                  {"alternativaId": 3},
                ],
    
                "alternativas":[
                  {
                    "ordem": Math.floor(Math.random() * 1000000),
                    "alternativaId": 1,
                    "questaoCorreta": currentQuestoes[click - 1].alternativas[0].questaoCorreta,
                    "questaoText": currentQuestoes[click - 1].alternativas[0].questaoText,
    
                  },
            
                  {
                    "ordem": Math.floor(Math.random() * 1000000),
                    "alternativaId": 2,
                    "questaoCorreta": currentQuestoes[click - 1].alternativas[1].questaoCorreta,
                    "questaoText": currentQuestoes[click - 1].alternativas[1].questaoText,
                  },
            
                  {
                    "ordem": Math.floor(Math.random() * 1000000),
                    "alternativaId": 3,
                    "questaoCorreta": currentQuestoes[click - 1].alternativas[2].questaoCorreta,
                    "questaoText": currentQuestoes[click - 1].alternativas[2].questaoText,
                  }              
                ]
              }
            ]

            arrayModifiedQuestoes.push(...modifiedQuestoes);

          }
          
        }

        //Chama a proxima questão até os objetos acabarem
        if(click < currentQuestoes.length){
          embaralhaQuestao(click);
          
          textoEnunciado.innerHTML = currentQuestoes[click].titulo;
          numeroDaQuestao.innerHTML = `Questão ${currentQuestoes[click].numQuestao}`;

          ilustraQuestaoContainer.innerHTML = `<img src="${currentQuestoes[click].ilustraQuestao}" alt="">`;
          statusQuestaoContainer.innerHTML = `<img class="img-status" src="${currentQuestoes[click].statusQuestao}" alt="">`

          
          for(let i = 0; i < currentQuestoes[click].alternativas.length; i++){
              textALternativa[i].innerHTML = currentQuestoes[click].alternativas[i].questaoText;
              numeroDaAlternativa[i].innerHTML = i+1;
              radioButtons[i].value = currentQuestoes[click].alternativas[i].questaoCorreta;
              arrDivQuestao[i].dataset.each = currentQuestoes[click].alternativas[i].questaoCorreta;
              arrDivNumeros[i].dataset.check = currentQuestoes[click].alternativas[i].questaoCorreta;
              arrLabelsAlternativas[i].dataset.label = currentQuestoes[click].alternativas[i].questaoCorreta;
          }

          console.log(currentQuestoes[click].questaoFeitaCorreta)

          //Verifica se usuário já acertou a questão atual. Se sim, seta checked do input para true e coloca estilo disabled nas alternativas
          if(currentQuestoes[click].questaoFeitaCorreta === 'true'){
            //textQuestaoCertaContainer.style.display = 'flex';
            //botaoAvancarContainer.style.display = 'flex';
            //botaoAvancar.style = buttonAvancarEnabledStyle;

            arrLabelsAlternativas.map((item)=>{
              if(item.dataset.label === 'true'){
                item.style.backgroundColor = '#FFF';
              }else{
                item.style.backgroundColor = '#FFE8DE';
              }
            });
            arrChecked.map((item)=>{
              if(item.value === 'true'){
                item.checked = true;
              }
            });
            arrDivQuestao.map((item)=>{
              item.style.pointerEvents = 'none';
              if(item.dataset.each === 'true'){
                item.style = styleAlternativaAcertada;
                item.style.pointerEvents = 'none';
              }
            });
            arrDivNumeros.map((item)=>{
              if(item.dataset.check === 'true'){
                item.innerHTML = `<img src="https://apps.univesp.br/tipos-de-contrato/assets/icone-acerto.svg" style="height: 33px">`;
                item.style = `border: 0;`;
                item.style.backgroundColor = '#C7D3C8';
              }else{
                item.style = `border: 2px solid #000`;
                item.style.backgroundColor = '#FFF';
              }
            });
            
          }
          
          else if(currentQuestoes[click].questaoFeitaCorreta === 'false'){
            //textQuestaoCertaContainer.style.display = 'none';

            arrDivQuestao.map((item)=>{
              item.style.pointerEvents = 'auto';
              item.style = styleAlternativasNaoSelecionadas
            });

            eachLabelAlternativa.forEach(e=>{
              e.style.backgroundColor = '#FFF';
            });

            arrDivNumeros.map((item)=>{
              item.style = `border: 2px solid #000`;
            })
            
          }
          

        }

        // Quando objetos acabarem atualiza o localStorage de qtde de questoes certas e de questões (apenas com as respondidas erradas)
        if(click === currentQuestoes.length){
          localStorage.setItem(`questoesCorretasObjetos`, questoesCorretas);
          localStorage.setItem(`modifiedQuestoes`, JSON.stringify(arrayModifiedQuestoes));
          //localStorage.setItem('buttonIdStorage', currentBloco);
          //localStorage.setItem(`blocoIniciado${currentBloco}`, true);

          /* Usar: https://apps.univesp.br/100-conceitos-contabilidade/pages/gabarito.html quando subir no servidor */
          window.location.href = 'http://127.0.0.1:5500/resultado.html';
        }
      }
    }


    function embaralhaQuestao(n){
      currentQuestoes[n].alternativas.sort((a,b) => a.ordem - b.ordem);
    }

    //Setters
    botaoAvancar.addEventListener('click', chamaProximaQuestao);

})
