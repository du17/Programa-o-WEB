function IMC(peso, altura) {return peso / (altura * altura);}

function addDisplay() {
    var nome = document.getElementsByClassName("nome");
    var peso = document.getElementsByClassName("peso");
    var altura = document.getElementsByClassName("altura");
    var gordura = document.getElementsByClassName("gordura");

    var table = document.createElement("tr");

    for (var i = 0; i < nome.length; i++) {
        var nomes = nome[i].value;
        var pesos = parseFloat(peso[i].value);
        var alturas = parseFloat(altura[i].value);
        var gorduras = parseFloat(gordura[i].value);
        var imc = IMC(pesos, alturas).toFixed(2);

        var newNome = document.createElement("td");
        newNome.textContent = nomes;
        table.appendChild(newNome);

        var newPeso = document.createElement("td");
        newPeso.textContent = pesos + " kg";
        table.appendChild(newPeso);

        var newAltura = document.createElement("td");
        newAltura.textContent = alturas + " m";
        table.appendChild(newAltura);

        var newGordura = document.createElement("td");
        newGordura.textContent = gorduras + "%";
        table.appendChild(newGordura);

        var newIMC = document.createElement("td");
        newIMC.textContent = imc;
        table.appendChild(newIMC);
    }

    var bd = document.getElementById("data");
    bd.appendChild(table);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        displayData(this);
      }
    };
    xhttp.open("GET", "displayData.xml", true);
    xhttp.send();
}

function displayData(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Nome</th><th>Peso</th><th>Altura</th><th>Gordura</th><th>IMC</th></tr>";
    var x = xmlDoc.getElementsByTagName("DADOS");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PESO")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("ALTURA")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("GORDURA")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("IMC")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("data").innerHTML = table;
}