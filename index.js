const botaoComecar = document.getElementById('botao-comecar');

function irQuiz(){
    window.location.href = "pages/quiz/quiz.html";
}

botaoComecar.addEventListener('click', irQuiz);