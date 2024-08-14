function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const answers = {
        q1: 'a',
        q2: 'c',
        q3: 'c',
        q4: 'b',
        q5: 'a'
    };

    let score = 0;
    let unanswered = false;

    for (let i = 1; i <= 5; i++) {
        const question = quizForm['q' + i];
        let answered = false;
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                if (question[j].value === answers['q' + i]) {
                    score++;
                }
                break;
            }
        }
        if (!answered) {
            unanswered = true;
            alert('Por favor, responda todas as questões.');
            break;
        }
    }

    if (!unanswered) {
        alert(`Você acertou ${score} de 5 questões!`);

        if (score === 5) {
            alert('Parabéns! Você acertou todas as perguntas!');
        } else if (score >= 3) {
            alert('Bom trabalho! Você tem um bom conhecimento.');
        } else {
            alert('Continue praticando para melhorar!');
        }
    }
}