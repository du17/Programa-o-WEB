
/*function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function addDisplay() {
    var nomes = document.getElementsByClassName("nome");
    var pesos = document.getElementsByClassName("peso");
    var alturas = document.getElementsByClassName("altura");
    var gorduras = document.getElementsByClassName("gordura");

    var table = document.createElement("tr");

    for (var i = 0; i < nomes.length; i++) {
        var nome = nomes[i].value;
        var peso = parseFloat(pesos[i].value);
        var altura = parseFloat(alturas[i].value);
        var gordura = parseFloat(gorduras[i].value);
        var imc = calcularIMC(peso, altura).toFixed(2);

        var novoItemNome = document.createElement("td");
        novoItemNome.textContent = nome;
        table.appendChild(novoItemNome);

        var novoItemPeso = document.createElement("td");
        novoItemPeso.textContent = peso + " kg";
        table.appendChild(novoItemPeso);

        var novoItemAltura = document.createElement("td");
        novoItemAltura.textContent = altura + " m";
        table.appendChild(novoItemAltura);

        var novoItemGordura = document.createElement("td");
        novoItemGordura.textContent = gordura + "%";
        table.appendChild(novoItemGordura);

        var novoItemIMC = document.createElement("td");
        novoItemIMC.textContent = imc;
        table.appendChild(novoItemIMC);
    }

    var bd = document.getElementById("data");
    bd.appendChild(table);
}
*/