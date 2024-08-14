function verificarRespostas() {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let acertos = 0;
    respostas.forEach(resposta => {
        if (resposta.value === "verdadeiro" && resposta.name === "q1" ||
            resposta.value === "mito" && resposta.name === "q2" ||
            resposta.value === "mito" && resposta.name === "q3") {
            acertos++;
        }
    });
    const resultado = document.getElementById("resultado");
    if (acertos >= 2) {
        resultado.textContent = "Você está bem informado!";
    } else {
        resultado.textContent = "Você precisa se informar melhor.";
    }
}