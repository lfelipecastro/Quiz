const pergunta = document.getElementById('pergunta');
const altA = document.getElementById('alternativa-a');
const altB = document.getElementById('alternativa-b');
const altC = document.getElementById('alternativa-c');
const altD = document.getElementById('alternativa-d');
const botaoQuiz = document.getElementById('botao-quiz');
const botaoVoltar = document.getElementById('botao-voltar');

const perguntaUm = {
    pergunta : '1. Como podemos definir um Algoritmo?',
    altA : 'a. Sequência de comandos ordenados, infinitos e ambíguos que são empregados para executar uma tarefa.',
    altB : 'b. Sequência de instruções ordenadas, infinitas e não-ambíguas que são empregadas para executar uma tarefa.',
    altC : 'c. Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa.',
    altD : 'd. Sequência de comandos ordenados, infinitos e não-ambíguos que são empregados para executar uma tarefa.',
    respCerta : 3,
}

const perguntaDois = {
    pergunta : '2. Qual dos seguintes itens possui apenas tipos válidos usados em lógica de programação (tipos primitivos)?',
    altA : 'a. Inteiro, Temporal, Caractere, Double',
    altB : 'b. Booleano, Real, Inteiro, Irracional',
    altC : 'c. Inteiro, Booleano, Tipografia, Double',
    altD : 'd. Inteiro, Booleano, Caractere, Double',
    respCerta : 4,
}

const perguntaTres = {
    pergunta : '3.7. É possível ordenar valores numéricos já armazenados em um vetor de números decimais?',
    altA : 'a. Não, somente é possível ter valores em ordem se os valores forem inseridos em ordem',
    altB : 'b. Sim, mas somente se os números forem inteiros. Números decimais não podem ser ordenados',
    altC : 'c. Sim, mas para isso é necessário usar um algoritmo para ordenação de vetores',
    altD : 'd. Vetores não permitem o armazenamento de números decimais, somente números reais',
    respCerta : 3,
}

let indice = 0;
let index = 0;
let valorRespCertas = 0;
const perguntasArray = [perguntaUm, perguntaDois, perguntaTres];
const respInseridasArray = [0,0,0];

function iniciarQuiz(){
    pergunta.innerText = perguntasArray[index].pergunta;
    altA.innerText = perguntasArray[index].altA;
    altB.innerText = perguntasArray[index].altB;
    altC.innerText = perguntasArray[index].altC;
    altD.innerText = perguntasArray[index].altD;
}

function valorPontuacao(){
    let aux;
    for(aux = 0; aux < perguntasArray.length; aux++){
        if(perguntasArray[aux].respCerta === respInseridasArray[aux]){
            valorRespCertas += 1;
        }
    }
}

function prosseguirQuiz(){
    if(index >= perguntasArray.length - 1){
        valorPontuacao();
        window.location.href = "../resultado/resultado.html?acertos="+valorRespCertas;
        index = 0;
    }else{
        index += 1;
        iniciarQuiz();
    }
}

function voltar(){
    if(index <= 0){
        index = 0;
        history.back();
    }else{
        index-=1;
        iniciarQuiz();
    }
}

function selecionaA(){
    indice = 1;
    respInseridasArray[index] = indice;
}

function selecionaB(){
    indice = 2;
    respInseridasArray[index] = indice;
}

function selecionaC(){
    indice = 3;
    respInseridasArray[index] = indice;
}

function selecionaD(){
    indice = 4;
    respInseridasArray[index] = indice;
}

iniciarQuiz();

botaoQuiz.addEventListener('click', prosseguirQuiz);
botaoVoltar.addEventListener('click', voltar);
altA.addEventListener('click', selecionaA);
altB.addEventListener('click', selecionaB);
altC.addEventListener('click', selecionaC);
altD.addEventListener('click', selecionaD);