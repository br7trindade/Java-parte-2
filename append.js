
// Seleciona o título e altera seu texto
const titulo = document.getElementById("titulo");
titulo.innerText = "DOM em Ação!";

// Seleciona a lista e adiciona um novo item
const lista = document.querySelector("ul");
const novoItem = document.createElement("li");
novoItem.innerText = "Item 3";
lista.appendChild(novoItem);

const juan = document.createElement("li");
juan.innerText = "Item 4";
lista.appendChild(juan);