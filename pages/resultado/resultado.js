const botaoRecomecar = document.getElementById('botao-recomecar');
const pontuacao = document.getElementById('pontuacao');
const mensagem = document.getElementById('mensagem');
let pontos = "0";

function voltarComeco(){
    history.go(-2);
}

function mostrarResultado(){
    const urlParams = new URLSearchParams(window.location.search);
    pontos = urlParams.get("acertos");
    pontuacao.innerText = "Sua pontuação: "+pontos;

    if(pontos >= 0 && pontos <= 3){
        mensagem.innerText = "Estude mais sobre programação!";
    }else if(pontos >= 4 && pontos <= 6){
        mensagem.innerText = "Você está no caminho certo, é só estudar um pouco mais!";
    }else if(pontos >= 7 && pontos <= 9){
        mensagem.innerText = "Você é demais! Mantenha esse ritmo.";
    }else if(pontos === 10){
        mensagem.innerText = "Você é o(a) Eistein da programação!";
    }
}

mostrarResultado();

botaoRecomecar.addEventListener('click', voltarComeco);