// FUNÇÃO SLIDESHOW

let slides = document.getElementsByClassName("slide");

// VARIÁVEIS
let i = 0;
let tempo = 3000; 

// FUNÇÃO 
function slideShow() {
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slides[i].style.display = "block";
    i++;
    if (i == slides.length) {
        i = 0;
    }
    setTimeout(slideShow, tempo);
}
slideShow();

// FUNÇÃO MUDAR TEMA

let btnClaro = document.getElementById("tema-claro");
let btnEscuro = document.getElementById("tema-escuro");
let btnMisto = document.getElementById("tema-misto");

btnClaro.addEventListener("click", function() {
    document.body.className = "tema-claro";
});

btnEscuro.addEventListener("click", function() {
    document.body.className = "tema-escuro";
});

btnMisto.addEventListener("click", function() {
    document.body.className = "tema-misto";
});

// QUIZ

// Array com as perguntas e as opções
const perguntas = [
    {
        pergunta: "Qual é a sua refeição favorita?",
        opcoes: [
            { texto: "Carne vermelha grelhada", pontos: { tinto: 3, branco: 0, rose: 0, espumante: 0, merlot: 2, porto: 1 } },
            { texto: "Peixe ou frutos do mar", pontos: { tinto: 0, branco: 3, rose: 1, espumante: 2, merlot: 0, porto: 0 } },
            { texto: "Massas e queijos", pontos: { tinto: 2, branco: 1, rose: 1, espumante: 0, merlot: 3, porto: 0 } },
            { texto: "Sobremesas doces", pontos: { tinto: 0, branco: 0, rose: 0, espumante: 1, merlot: 0, porto: 3 } }
        ]
    },
    {
        pergunta: "Qual ambiente você prefere?",
        opcoes: [
            { texto: "Jantar romântico à luz de velas", pontos: { tinto: 3, branco: 1, rose: 2, espumante: 1, merlot: 2, porto: 0 } },
            { texto: "Festa animada com amigos", pontos: { tinto: 0, branco: 1, rose: 3, espumante: 3, merlot: 0, porto: 0 } },
            { texto: "Noite tranquila em casa", pontos: { tinto: 2, branco: 2, rose: 1, espumante: 0, merlot: 3, porto: 1 } },
            { texto: "Celebração especial", pontos: { tinto: 1, branco: 0, rose: 1, espumante: 3, merlot: 0, porto: 2 } }
        ]
    },
    {
        pergunta: "Qual sabor você prefere?",
        opcoes: [
            { texto: "Intenso e encorpado", pontos: { tinto: 3, branco: 0, rose: 0, espumante: 0, merlot: 1, porto: 2 } },
            { texto: "Leve e refrescante", pontos: { tinto: 0, branco: 3, rose: 3, espumante: 2, merlot: 0, porto: 0 } },
            { texto: "Equilibrado e suave", pontos: { tinto: 1, branco: 2, rose: 2, espumante: 1, merlot: 3, porto: 0 } },
            { texto: "Doce e marcante", pontos: { tinto: 0, branco: 0, rose: 1, espumante: 1, merlot: 0, porto: 3 } }
        ]
    },
    {
        pergunta: "Qual é a sua estação do ano favorita?",
        opcoes: [
            { texto: "Inverno", pontos: { tinto: 3, branco: 0, rose: 0, espumante: 0, merlot: 2, porto: 3 } },
            { texto: "Verão", pontos: { tinto: 0, branco: 3, rose: 3, espumante: 2, merlot: 0, porto: 0 } },
            { texto: "Outono", pontos: { tinto: 2, branco: 1, rose: 1, espumante: 1, merlot: 3, porto: 1 } },
            { texto: "Primavera", pontos: { tinto: 0, branco: 2, rose: 3, espumante: 3, merlot: 1, porto: 0 } }
        ]
    },
    {
        pergunta: "Como você gosta de passar seu tempo livre?",
        opcoes: [
            { texto: "Lendo um bom livro", pontos: { tinto: 3, branco: 1, rose: 0, espumante: 0, merlot: 2, porto: 2 } },
            { texto: "Curtindo a praia ou piscina", pontos: { tinto: 0, branco: 3, rose: 3, espumante: 2, merlot: 0, porto: 0 } },
            { texto: "Assistindo filmes em casa", pontos: { tinto: 2, branco: 2, rose: 1, espumante: 0, merlot: 3, porto: 1 } },
            { texto: "Em eventos sociais", pontos: { tinto: 1, branco: 1, rose: 2, espumante: 3, merlot: 1, porto: 1 } }
        ]
    }
];

// Possíveis resultados para o usuário
const resultados = {
    tinto: {
        nome: "Vinezza Reserva Tinto",
        descricao: "Você aprecia sabores intensos e experiências marcantes! O Cabernet Sauvignon é perfeito para você, com suas notas de frutas vermelhas maduras e estrutura robusta. Ideal para acompanhar carnes vermelhas e momentos especiais.",
        preco: "R$ 189,90"
    },
    branco: {
        nome: "Vinezza Branco Premium",
        descricao: "Você tem um paladar refinado e aprecia a elegância! O Chardonnay é sua escolha, com suas notas cítricas e florais refrescantes. Perfeito para peixes, frutos do mar e dias ensolarados.",
        preco: "R$ 159,90"
    },
    rose: {
        nome: "Vinezza Rosé Sunset",
        descricao: "Você é descontraído e adora a leveza da vida! O Rosé é ideal para você, com seu sabor frutado e aromático. Perfeito para aperitivos, dias quentes e momentos descontraídos com amigos.",
        preco: "R$ 139,90"
    },
    espumante: {
        nome: "Vinezza Espumante Celebration",
        descricao: "Você adora celebrar a vida e momentos especiais! O Espumante é sua escolha, com bolhas finas e sabor refinado. Ideal para brindes, festas e ocasiões memoráveis.",
        preco: "R$ 219,90"
    },
    merlot: {
        nome: "Vinezza Merlot Clássico",
        descricao: "Você aprecia o equilíbrio e a harmonia! O Merlot é perfeito para você, com seus taninos macios e sabor aveludado. Excelente com massas, queijos e noites tranquilas em casa.",
        preco: "R$ 169,90"
    },
    porto: {
        nome: "Vinezza Porto Vintage",
        descricao: "Você tem gostos sofisticados e aprecia o luxo! O Vinho do Porto é sua escolha, doce e encorpado com notas de frutas secas. Perfeito para sobremesas e momentos de contemplação.",
        preco: "R$ 249,90"
    }
};

// Variáveis do quiz
let perguntaAtual = 0;
let pontuacao = {
    tinto: 0,
    branco: 0,
    rose: 0,
    espumante: 0,
    merlot: 0,
    porto: 0
};

//  Função para iniciar
function iniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = {
        tinto: 0,
        branco: 0,
        rose: 0,
        espumante: 0,
        merlot: 0,
        porto: 0
    };
    document.getElementById("resultado").style.display = "none";
    document.getElementById("pergunta-container").style.display = "block";
    mostrarPergunta();
}

// Função para mostrar a pergunta atual
function mostrarPergunta() {
    const perguntaObj = perguntas[perguntaAtual];
    document.getElementById("pergunta").textContent = perguntaObj.pergunta;
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
    perguntaObj.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.onclick = () => selecionarOpcao(index);
        opcoesDiv.appendChild(botao);
    });
}

// Função para quando uma opção é selecionada
function selecionarOpcao(index) {
    const opcaoSelecionada = perguntas[perguntaAtual].opcoes[index];
    for (let tipo in opcaoSelecionada.pontos) {
        pontuacao[tipo] += opcaoSelecionada.pontos[tipo];
    }
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// Função para mostrar o resultado
function mostrarResultado() {
    document.getElementById("pergunta-container").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    let vinhoVencedor = "tinto";
    let maiorPontuacao = pontuacao.tinto;
    for (let tipo in pontuacao) {
        if (pontuacao[tipo] > maiorPontuacao) {
            maiorPontuacao = pontuacao[tipo];
            vinhoVencedor = tipo;
        }
    }
    const resultado = resultados[vinhoVencedor];
    document.getElementById("resultado-texto").innerHTML = `
        <h4>${resultado.nome}</h4>
        <p>${resultado.descricao}</p>
        <p style="color: #d4af37; font-size: 24px; font-weight: bold; margin-top: 20px;">${resultado.preco}</p>
    `;
}

// Reiniciar o quiz se o usuário desejar
document.getElementById("reiniciar-quiz").addEventListener("click", iniciarQuiz);

// Inicia o quiz quando a página carregar
window.addEventListener("load", function() {
    iniciarQuiz();
});