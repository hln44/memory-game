let currentName = sessionStorage.getItem("currentUser");
let currentMail = sessionStorage.getItem("currentUser");

currentName = JSON.parse(currentName);
currentMail = JSON.parse(currentMail);

console.log(currentName);
console.log(currentMail);
console.log(currentName.nom);
console.log(currentMail.email);

let baliseName = document.querySelector(".inputName");
let baliseMail = document.querySelector(".inputMail");

baliseName.insertAdjacentHTML(
  "afterend",
  `</div><div><p>${currentName.nom}</p>`
);
baliseMail.insertAdjacentHTML(
  "afterend",
  `</div><div><p>${currentMail.email}</p>`
);
