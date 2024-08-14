document.addEventListener("DOMContentLoaded", function() {

    fetch("menu.json")
        .then(response => response.json())
        .then(data => {
            const menuItems = document.getElementById("menuItems");
            data.forEach(item => {
                const menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");
                menuItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span>Preço: R$ ${item.price.toFixed(2)}</span>
                `;
                menuItems.appendChild(menuItem);
            });
        });

    const calcularTotal = (items) => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    const itemsSelecionados = [
        { name: "Pizza Margherita", price: 25.99 },
        { name: "Pizza Pepperoni", price: 29.99 },
        { name: "Pizza Vegetariana", price: 27.99 }
    ];

    console.log("Total da compra: R$" + calcularTotal(itemsSelecionados).toFixed(2));

    const comprovante = {
        items: itemsSelecionados,
        total: calcularTotal(itemsSelecionados)
    };

    console.log(JSON.stringify(comprovante));
});

