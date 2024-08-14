function computeScore() {
    const answers = {
        q1: "falso",
        q2: "verdadeiro",
        q3: "verdadeiro"
    };

    let score = 0;
    const form = document.forms['quizForm'];

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    document.getElementById('result').innerText = `Você acertou ${score} de 3 perguntas.`;
}