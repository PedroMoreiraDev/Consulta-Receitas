//Função para a criação de cards
let elements = 0;
let urlPrato = "";
let nomeDoPrato = "";
let descricaoPrato = "";
let arrObjImagem = [];

function createCard() {
  nomeDoPrato = document.getElementById("nomeDoPrato").value;
  descricaoPrato = document.getElementById("descricaoPrato").value;
  urlPrato = document.getElementById("urlPrato").value;

  let cardSection = document.getElementById("card");
  cardSection.innerHTML += `<div class="food-card"> <img src="${urlPrato}">
                                    <h2>${nomeDoPrato}</h2>
                                    <p>${descricaoPrato}<p> </div>`;

  let json = `{"imagem":"${urlPrato}", "titulo":"${nomeDoPrato}"}`;

  localStorage.setItem("card", json);
}

// window.onload = function () {
//   let obj = localStorage.getItem("card");
//   obj = JSON.parse(obj); // transforma a string em json

//   let cardSection = localStorage.getElementById("card");
//   cardSection.innerHTML += `<div> <img src="${obj.imagem}">
//                                   <h2> ${obj.titulo}</h2> </div>`;
// };
