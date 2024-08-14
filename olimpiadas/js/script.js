function computeScore() {
    const form = document.getElementById('quizForm');
    let score = 0;

    const answers = {
        q1: 'verdadeiro',
        q2: 'verdadeiro',
        q3: 'verdadeiro'
    };

    for (let [question, answer] of Object.entries(answers)) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answer) {
            score++;
        }
    }

    let resultText;
    switch (score) {
        case 1:
            resultText = "Você ganhou a medalha de Bronze!";
            break;
        case 2:
            resultText = "Você ganhou a medalha de Prata!";
            break;
        case 3:
            resultText = "Você ganhou a medalha de Ouro!";
            break;
        default:
            resultText = "Você não ganhou nenhuma medalha.";
    }

    document.getElementById('result').innerText = resultText;
}

/*tabelinha*/

document.addEventListener('DOMContentLoaded', () => {
    const medalTableBody = document.getElementById('medal-table-body');

    const countries = [
        { name: "Estados Unidos", flag: "eua.webp", medals: 2827 },
        { name: "União Soviética", flag: "urss.png", medals: 1122 },
        { name: "Alemanha", flag: "alemanha.avif", medals: 974 },
        { name: "Reino Unido", flag: "gra-betania.webp", medals: 883 },
        { name: "França", flag: "franca.svg", medals: 840 }
    ];

    countries.forEach(country => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="img/${country.flag}" alt="Bandeira de ${country.name}" width="50"></td>
            <td>${country.name}</td>
            <td>${country.medals}</td>
        `;
        medalTableBody.appendChild(row);
    });
});
