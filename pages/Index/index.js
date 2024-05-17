const botaoComecar = document.getElementById('botao-comecar');

function irQuiz(){
    window.location.href = "../quiz/quiz.html";
}

botaoComecar.addEventListener('click', irQuiz);