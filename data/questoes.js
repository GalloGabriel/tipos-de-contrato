const BASE_URL = 'https://apps.univesp.br/tipos-de-contrato/assets';

let allQuestoes = [
  {
    "questaoId": 1,
    "titulo": "O princípio da liberdade das partes garante a máxima liberdade contratual para os contratantes. Assim, os contratantes podem e têm direito a decidir de maneira livre sobre quais são os seus interesses que se farão presentes nas cláusulas; é claro, desde que esteja conforme o disposto na legislação em vigor. Este princípio está relacionado a qual(is) tipo(s) de contrato?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-1.png`,
    "statusQuestao": `${BASE_URL}/status-0.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Todos os tipos de contrato"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de compra e venda"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de locação"
      }
    ]
  },

  {
    "questaoId": 2,
    "titulo": "Qual é o tipo de contrato no qual deve haver o registro ou a tradição para que seja realizada a transferência da propriedade do bem, móvel ou imóvel?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-2.png`,
    "statusQuestao": `${BASE_URL}/status-1.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de compra e venda"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de seguro"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de locação"
      }
    ]
  },

  {
    "questaoId": 3,
    "titulo": "Contrato que autoriza uma das partes a retomar o bem para uso próprio. Qual é esse tipo de contrato?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-3.png`,
    "statusQuestao": `${BASE_URL}/status-2.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de locação"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de compra e venda"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de empréstimo"
      }
    ]
  },

  {
    "questaoId": 4,
    "titulo": "Tipo de contrato regido pelos princípios da norma mais favorável, da primazia da realidade; da irrenunciabilidade de direitos e da inalterabilidade contratual lesiva. Esses são elementos inerentes a qualtipo de contrato?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-4.png`,
    "statusQuestao": `${BASE_URL}/status-3.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de trabalho"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato administrativo"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de empréstimo"
      }
    ]
  },

  {
    "questaoId": 5,
    "titulo": "Qual é o tipo de contrato que obriga uma das partes a devolver o bem objeto do contrato, ao final, no mesmo estado em que o recebeu?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-5.png`,
    "statusQuestao": `${BASE_URL}/status-4.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de locação"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de compra e venda"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de seguro"
      }
    ]
  },

  {
    "questaoId": 6,
    "titulo": "Os contratos, em geral, podem ser classificados como unilaterais (quando criam obrigações para apenas uma das partes contratantes), bilaterais (quando originam impactos e direitos/ deveres para ambos os contratantes) e plurilaterais (quando geram efeitos para várias pessoas envolvidas no contrato, não apenas os contratantes). Um exemplo de contrato que costuma ser bilateral é o:",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-6.png`,
    "statusQuestao": `${BASE_URL}/status-5.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de locação"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de mandato"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de fiança"
      }
    ]
  },

  {
    "questaoId": 7,
    "titulo": "Subordinação, pessoalidade e não-eventualidade são elementos intrínsecos a qual tipo de contrato?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-7.png`,
    "statusQuestao": `${BASE_URL}/status-6.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de trabalho"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de locação"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de prestação de serviços"
      }
    ]
  },

  {
    "questaoId": 8,
    "titulo": "Vontade livre das partes, coisa e preço. Esses são elementos inerentes a qual tipo de contrato?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-8.png`,
    "statusQuestao": `${BASE_URL}/status-7.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de compra e venda"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato administrativo"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de empréstimo"
      }
    ]
  },

  {
    "questaoId": 9,
    "titulo": "Os contratantes necessitam respeitar certos requisitos e princípios, como o princípio da boa-fé, para que um determinado contrato possua aptidão para produzir efeitos na realidade factual e jurídica. Isso vale para:",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-9.png`,
    "statusQuestao": `${BASE_URL}/status-8.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Todos os tipos de contrato"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de trabalho"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de compra e venda"
      }
    ]
  },

  {
    "questaoId": 10,
    "titulo": "Exigência de celebrar contrato solene sob a forma de escritura pública em caso de valores superiores a trinta vezes o saláriomínimo vigente no país. Essa exigência compreende qualtipo de contrato?",
    "questaoFeitaCorreta": "false",
    "ilustraQuestao": `${BASE_URL}/ilustra-questao-10.png`,
    "statusQuestao": `${BASE_URL}/status-9.svg`,

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Contrato de compra e venda"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Contrato de empréstimo"
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Contrato de trabalho"
      }
    ]
  }
]