//Inserindo as imagens no HTML

let nomeDoPrato = "";
let descricaoPrato = "";
let urlPrato = "";
let arrObjImagem = [];

function inserirCard() {
  nomeDoPrato = document.getElementById("nomeDoPrato").value;
  descricaoPrato = document.getElementById("descricaoPrato").value;
  urlPrato = document.getElementById("urlPrato").value;

  let cardSection = document.getElementById("card");
  cardSection.innerHTML += `<div class="food-card"> 
                                    <h2 class="titulo-card">${nomeDoPrato}</h2> 
                                    <img src="${urlPrato}" class="imagem-comida">
                                    <p class="descricao-card">${descricaoPrato}<p> </div>`;
}

// let json = `{"imagem":"${urlPrato}", "titulo":"${nomeDoPrato}"}`;

// localStorage.setItem("card", json);
// window.onload = function () {
//   let obj = localStorage.getItem("card");
//   obj = JSON.parse(obj); // transforma a string em json

//   let cardSection = localStorage.getElementById("card");
//   cardSection.innerHTML += `<div> <img src="${obj.imagem}">
//                                   <h2> ${obj.titulo}</h2> </div>`;
// };
