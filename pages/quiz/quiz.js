const pergunta = document.getElementById('pergunta');
const altA = document.getElementById('alternativa-a');
const altB = document.getElementById('alternativa-b');
const altC = document.getElementById('alternativa-c');
const altD = document.getElementById('alternativa-d');
const botaoQuiz = document.getElementById('botao-continuar');
const botaoVoltar = document.getElementById('botao-voltar');

const perguntaUm = {
    pergunta : '1. Como podemos definir um Algoritmo?',
    altA : 'Sequência de comandos ordenados, infinitos e ambíguos que são empregados para executar uma tarefa',
    altB : 'Sequência de instruções ordenadas, infinitas e não-ambíguas que são empregadas para executar uma tarefa',
    altC : 'Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa',
    altD : 'Sequência de comandos ordenados, infinitos e não-ambíguos que são empregados para executar uma tarefa',
    respCerta : 3,
}

const perguntaDois = {
    pergunta : '2. Qual dos seguintes itens possui apenas tipos válidos usados em lógica de programação (tipos primitivos)?',
    altA : 'Inteiro, Temporal, Caractere, Double',
    altB : 'Booleano, Real, Inteiro, Irracional',
    altC : 'Inteiro, Booleano, Tipografia, Double',
    altD : 'Inteiro, Booleano, Caractere, Double',
    respCerta : 4,
}

const perguntaTres = {
    pergunta : '3. Quais são todos os estados possíveis que um tipo lógico pode assumir?',
    altA : 'Verdadeiro, Duvidoso',
    altB : 'Verdadeiro, Errado',
    altC : 'Incerto, Certo',
    altD : 'Verdadeiro, Falso',
    respCerta : 4,
}

const perguntaQuatro = {
    pergunta : '4. É possível ordenar valores numéricos já armazenados em um vetor de números decimais?',
    altA : 'Não, somente é possível ter valores em ordem se os valores forem inseridos em ordem',
    altB : 'Sim, mas somente se os números forem inteiros. Números decimais não podem ser ordenados',
    altC : 'Sim, mas para isso é necessário usar um algoritmo para ordenação de vetores',
    altD : 'Vetores não permitem o armazenamento de números decimais, somente números reais',
    respCerta : 3,
}

const perguntaCinco = {
    pergunta : '5. Qual dos seguintes itens é melhor representado por um valor constante em um algoritmo?',
    altA : 'Salário de um Funcionário',
    altB : 'Valor da Temperatura no final de semana',
    altC : 'Valor matemático de Pi',
    altD : 'Distância da Terra à Lua',
    respCerta : 3,
}

const perguntaSeis = {
    pergunta : '6. O que é Compilação?',
    altA : 'Comandos contidos no código-fonte são executados à medida em que são traduzidos, sendo necessária a interpretação toda vez que se quiser rodar o programa',
    altB : 'Tradução do código-fonte em um ou mais arquivos que podem ser armazenados e executados quantas vezes se desejar, sem necessitar de nova compilação',
    altC : 'Execução das instruções contidas em um script contendo o código-fonte, de forma sequencial',
    altD : 'Organização do código-fonte em uma pasta contendo arquivos em ordem alfabética',
    respCerta : 2,
}

const perguntaSete = {
    pergunta : '7. Qual dos seguintes itens mostra um laço for (para) escrito corretamente?',
    altA : 'para (con = 1; con < 10; con–) { instruções }',
    altB : 'para (con = 10; con >= 1; con++) { instruções }',
    altC : 'para (con = 10; con < 10; con–) { instruções }',
    altD : 'para (con = 1; con <= 10; con++) { instruções }',
    respCerta : 4,
}

const perguntaOito = {
    pergunta : '8. O que é uma Variável?',
    altA : 'Local na memória RAM do computador utilizado para armazenar temporariamente dados que são utilizados pelo programa',
    altB : 'Estado lógico de uma constante, que pode variar entre verdadeiro e falso',
    altC : 'Valor que varia conforme passa o tempo, sendo sempre modificado conforme o programa vai sendo executado',
    altD : 'Valor armazenado em locais variáveis no computador, como HD, RAM ou Memória Cache',
    respCerta : 1,
}

const perguntaNove = {
    pergunta : '9. Qual das seguintes afirmações sobre arrays (vetores) é verdadeira?',
    altA : 'Podemos acessar todos os elementos individuais de uma array por meio de uma posição de índice, começando sempre em 1',
    altB : 'Um array é uma estrutura que pode armazenar uma série de elementos de dados de mesmo tipo',
    altC : 'Um array é uma estrutura que permite armazenar até 10 elementos de dados, sempre do mesmo tipo',
    altD : 'Podemos acessar os elementos individuais de uma array por meio de uma posição de índice, começando em A',
    respCerta : 2,
}

const perguntaDez = {
    pergunta : '10. Para que serve uma biblioteca?',
    altA : 'Uma biblioteca é um arquivo que organiza código pré-definido para o uso em aplicações',
    altB : 'Para modularizar o desenvolvimento de estruturas de comparação e repetição',
    altC : 'Uma biblioteca é um programa que permite escrever e testar código-fonte, também conhecida como IDE',
    altD : 'Para que os programadores possam consultar a documentação da linguagem com facilidade',
    respCerta : 1,
}

let indice = 0;
let index = 0;
let valorRespCertas = 0;
const perguntasArray = [perguntaUm, perguntaDois, perguntaTres, perguntaQuatro, perguntaCinco, perguntaSeis, 
    perguntaSete, perguntaOito, perguntaNove, perguntaDez];
const respInseridasArray = [0,0,0,0,0,0,0,0,0,0];

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
    limpaAlternativas();
    if(indice != 0)
        if(index >= perguntasArray.length - 1){
            valorPontuacao();
            window.location.href = "../resultado/resultado.html?acertos="+valorRespCertas;
            index = 0;
            indice = 0;
        }else{
            index += 1;
            iniciarQuiz();
            indice = 0;
        }
}

function voltar(){
    limpaAlternativas();
    if(index <= 0){
        index = 0;
        history.back();
    }else{
        index-=1;
        iniciarQuiz();
    }
}

function limpaAlternativas(){
    altA.classList.remove('botao-quiz-pressionado');
    altA.classList.add('botao-quiz');
    altB.classList.remove('botao-quiz-pressionado');
    altB.classList.add('botao-quiz');
    altC.classList.remove('botao-quiz-pressionado');
    altC.classList.add('botao-quiz');
    altD.classList.remove('botao-quiz-pressionado');
    altD.classList.add('botao-quiz');
}

function selecionaA(){
    indice = 1;
    respInseridasArray[index] = indice;

    limpaAlternativas();
    altA.classList.remove('botao-quiz');
    altA.classList.add('botao-quiz-pressionado');
}

function selecionaB(){
    indice = 2;
    respInseridasArray[index] = indice;

    limpaAlternativas();
    altB.classList.remove('botao-quiz');
    altB.classList.add('botao-quiz-pressionado');
}

function selecionaC(){
    indice = 3;
    respInseridasArray[index] = indice;

    limpaAlternativas();
    altC.classList.remove('botao-quiz');
    altC.classList.add('botao-quiz-pressionado');
}

function selecionaD(){
    indice = 4;
    respInseridasArray[index] = indice;

    limpaAlternativas();
    altD.classList.remove('botao-quiz');
    altD.classList.add('botao-quiz-pressionado');
}

iniciarQuiz();

botaoQuiz.addEventListener('click', prosseguirQuiz);
botaoVoltar.addEventListener('click', voltar);
altA.addEventListener('click', selecionaA);
altB.addEventListener('click', selecionaB);
altC.addEventListener('click', selecionaC);
altD.addEventListener('click', selecionaD);