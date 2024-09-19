const perguntas = [
    {
        pergunta: "x/2 + 1 = 2",
        alternativas: ["4", "0", "2", "-1"],
        resposta: "2"
    },
    {
        pergunta: "2x/3 - 1 = 3",
        alternativas: ["1", "4", "3", "6"],
        resposta: "6"
    },
    {
        pergunta: "1 - x = -3",
        alternativas: ["4", "-4", "-2", "3"],
        resposta: "4"
    },
    {
        pergunta: "1 - x = -2 + 2x",
        alternativas: ["-2", "1", "3", "2"],
        resposta: "1"
    },
    {
        pergunta: "x/3 + 4 = 1",
        alternativas: ["2", "15", "-9", "9"],
        resposta: "-9"
    },
    {
        pergunta: "-x - 1 = 5",
        alternativas: ["-6", "4", "6", "-4"],
        resposta: "-6"
    },
    {
        pergunta: "-x/2 + 1 = 2",
        alternativas: ["0", "3", "-6", "-2"],
        resposta: "-2"
    },
    {
        pergunta: "x/2 = -3",
        alternativas: ["6", "-6", "3", "-1,5"],
        resposta: "-6"
    },
    {
        pergunta: "4/x = 1",
        alternativas: ["1", "2", "4", "3"],
        resposta: "4"
    },
    {
        pergunta: "-2/x + 1 = 1",
        alternativas: ["4", "-2", "0", "2"],
        resposta: "0"
    }
];

let currentPerguntaIndex = 0;
let NarutoCerto = 0;
let NarutoErrado = 0;

const perguntaElement = document.getElementById('pergunta');
const alternativasElement = document.getElementById('alternativas');
const alternativaCertaElement = document.getElementById('NarutoCerto');
const alternativaErradaElement = document.getElementById('NarutoErrado');
const nextBotao = document.getElementById('nextBotao');
const feedbackElement = document.getElementById('feedback');
const clickSound = new Audio('naruto clone.mp3');



function mostraPergunta() {
    const currentPergunta = perguntas[currentPerguntaIndex];
    perguntaElement.textContent = currentPergunta.pergunta;
    alternativasElement.innerHTML = ''; // Limpar alternativas anteriores
    currentPergunta.alternativas.forEach(alternativa => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', (event) => {clickSound.play();selectResposta(event);});
        alternativasElement.appendChild(botao);
    });
}

function selectResposta(event) {
    const respostaSelecionada = event.target.textContent;
    if (respostaSelecionada === perguntas[currentPerguntaIndex].resposta) {
        NarutoCerto++;
        alternativaCertaElement.textContent = NarutoCerto;
        mostrarFeedback('correto');
    } else {
        NarutoErrado++;
        alternativaErradaElement.textContent = NarutoErrado;
        mostrarFeedback('errado');
    }
    currentPerguntaIndex++;
    if (currentPerguntaIndex < perguntas.length) {
        setTimeout(mostraPergunta, 1000); // Mostrar próxima pergunta após 1 segundo
    } else {
        // Lógica para quando todas as perguntas foram respondidas
    }
}

function mostrarFeedback(tipo) {
    const img = document.createElement('img');
    img.src = tipo === 'correto' ? 'Naruto Certo.png' : 'Naruto Errado.png';
    img.alt = tipo === 'correto' ? 'Naruto Certo' : 'Naruto Errado';
    img.className = tipo === 'correto' ? 'naruto-certo' : 'naruto-errado';
    feedbackElement.appendChild(img);
}


nextBotao.addEventListener('click', mostraPergunta);
mostraPergunta();
