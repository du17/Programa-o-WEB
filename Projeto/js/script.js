// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiqwufmMv7xW9ivLwTxzScOlC-x5cgUtE",
  authDomain: "teste-13b59.firebaseapp.com",
  projectId: "teste-13b59",
  storageBucket: "teste-13b59.appspot.com",
  messagingSenderId: "891360958368",
  appId: "1:891360958368:web:fa7bd73c3d4a7204a376c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', () => {
    const loadJSONData = (url, callback) => {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Erro ao carregar o JSON:', error));
    };

    const populateTable = (data, tableId) => {
        const tableBody = document.getElementById(tableId);
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    };

    // Carregar dados em cada página
    if (window.location.pathname.includes('laudos.html')) {
        loadJSONData('data/laudos.json', data => populateTable(data, 'laudosTable'));
    } else if (window.location.pathname.includes('estoque.html')) {
        loadJSONData('data/estoque.json', data => populateTable(data, 'estoqueTable'));
    } else if (window.location.pathname.includes('ordens.html')) {
        loadJSONData('data/ordens.json', data => populateTable(data, 'ordensTable'));
    } else if (window.location.pathname.includes('pedidos.html')) {
        loadJSONData('data/pedidos.json', data => populateTable(data, 'pedidosTable'));
    } else if (window.location.pathname.includes('notas.html')) {
        loadJSONData('data/notas.json', data => populateTable(data, 'notasTable'));
    } else if (window.location.pathname.includes('orcamentos.html')) {
        loadJSONData('data/orcamentos.json', data => populateTable(data, 'orcamentosTable'));
    }
});

//function IMC(peso, altura) {return peso / (altura * altura);}

function addDisplay() {
    var id = document.getElementsByClassName("id");
    var peso = document.getElementsByClassName("peso");
    var altura = document.getElementsByClassName("altura");
    var gordura = document.getElementsByClassName("gordura");

    var table = document.createElement("tr");

    for (var i = 0; i < id.length; i++) {
        var id = id[i].value;
        var pesos = parseFloat(peso[i].value);
        var alturas = parseFloat(altura[i].value);
        var gorduras = parseFloat(gordura[i].value);
        var imc = IMC(pesos, alturas).toFixed(2);

        var newId = document.createElement("td");
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