// je récupère mes éléments
let createAccountId = document.getElementById("createAccount");
let cancelAccountId = document.getElementById("cancelAccount");
let nameId = document.getElementById("name");
let emailId = document.getElementById("email");
let mdpId = document.getElementById("mdp");
let confmdpId = document.getElementById("confmdp");

let errName = document.querySelector(".errName");
let errNameP = document.querySelector(".errNameP");
let errMail = document.querySelector(".errMail");
let errMailP = document.querySelector(".errMailP");
let errMdp = document.querySelector(".errMdp");
let errMdpP = document.querySelector(".errMdpP");
let errConfMdp = document.querySelector(".errConfMdp");
let errConfMdpP = document.querySelector(".errConfMdpP");

let nameOk = document.querySelector(".nameOk");
let mailOk = document.querySelector(".mailOk");
let mdpOk = document.querySelector(".mdpOk");
let mdpConfOk = document.querySelector(".mdpConfOk");

let mdpFaible = document.querySelector(".faible");
let mdpMoyen = document.querySelector(".moyen");
let mdpFort = document.querySelector(".fort");

const regexMdp = new RegExp(
  /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
);
const regexMdpMoyen = new RegExp(/^(?=.*?[a-z])(?=.*?[0-9#?!@$%^&*-]).{6,}$/);
const regexMdpFort = new RegExp(
  /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$/
);

let mdp = "";
let confmdp = "";
let nameUser = "";
let emailUser = "";
let user = {};

// j'initialise un booléen pour vérifier la validité de chaque valeur
let nameV = false;
let emailV = false;
let mdpV = false;
let confmdpV = false;
let accountV = false;
let nameUnknown = false;
let mailUnknown = false;
let firstUser = false;

// récupérer les utilisateurs du localstorage
let getUsers = localStorage.getItem("users");
let array = JSON.parse(getUsers);
console.log(array);

if (array == null) {
  firstUser = true;
  array = [];
}
// else{
//  for (const [key, value] of Object.entries(array[0])) {
//        console.log(`${key}: ${value}`);
//      }
//  }

// je retire les espaces et chevrons puis je vérifie que le nom comporte au moins 3 caractères
function nameCheck() {
  nameId.addEventListener("input", () => {
    let nameU = nameId.value;
    nameU = nameU.replace(" ", "");
    nameU = nameU.replace("<", "");
    nameU = nameU.replace(">", "");
    if (nameU.length < 3) {
      errName.classList.remove("hidden");
      errNameP.classList.remove("hidden");
      nameOk.classList.add("hidden");
    } else {
      errName.classList.add("hidden");
      errNameP.classList.add("hidden");
      nameOk.classList.remove("hidden");
      nameV = true;
      nameUser = nameU;
      console.log(nameUser);
    }
  });
}

nameCheck();

// je retire les espaces et chevrons puis je vérifie que email corresponde à la RegExp
function emailCheck() {
  emailId.addEventListener("input", () => {
    let email = emailId.value;
    const regexEmail = new RegExp(/^[\w\-\.]+@([\w-]+.)+[\w-]{2,}$/);
    email = email.replaceAll(" ", "");
    email = email.replaceAll("<", "");
    email = email.replaceAll(">", "");
    emailV = regexEmail.test(email);
    if (!emailV) {
      errMail.classList.remove("hidden");
      errMailP.classList.remove("hidden");
      mailOk.classList.add("hidden");
    } else {
      errMail.classList.add("hidden");
      errMailP.classList.add("hidden");
      mailOk.classList.remove("hidden");
      emailUser = email;
    }
  });
}

emailCheck();

// mise en place du curseur de mot de passe
function curseurMdp() {
  mdpId.addEventListener("input", () => {
    mdp = mdpId.value;
    let confmdp = confmdpId.value;
    mdp = mdp.replaceAll(" ", "");
    mdp = mdp.replaceAll("<", "");
    mdp = mdp.replaceAll(">", "");
    confmdp = confmdp.replaceAll(" ", "");
    confmdp = confmdp.replaceAll("<", "");
    confmdp = confmdp.replaceAll(">", "");
    // console.log(mdp.length);
    if (mdp.length > 1) {
      if (mdp.length < 6) {
        mdpFaible.classList.remove("hidden");
      }
      if (regexMdpMoyen.test(mdp)) {
        mdpMoyen.classList.remove("hidden");
      } else {
        mdpMoyen.classList.add("hidden");
      }
      if (regexMdpFort.test(mdp)) {
        mdpFort.classList.remove("hidden");
      } else {
        mdpFort.classList.add("hidden");
      }
    } else {
      mdpFaible.classList.add("hidden");
    }
  });
}

curseurMdp();

// je retire les espaces et chevrons puis je vérifie que mdp corresponde à la RegExp et soit égal à confmdp

function mdpCheck() {
  mdpId.addEventListener("input", () => {
    mdp = mdpId.value;
    mdp = mdp.replaceAll(" ", "");
    mdp = mdp.replaceAll("<", "");
    mdp = mdp.replaceAll(">", "");
    if (mdp.length >= 6 && regexMdp.test(mdp)) {
      errMdp.classList.add("hidden");
      errMdpP.classList.add("hidden");
      mdpOk.classList.remove("hidden");
      // console.log("mdp ok");
    } else {
      errMdp.classList.remove("hidden");
      errMdpP.classList.remove("hidden");
      mdpOk.classList.add("hidden");
    }
  });

  confmdpId.addEventListener("input", () => {
    confmdp = confmdpId.value;
    confmdp = confmdp.replaceAll(" ", "");
    confmdp = confmdp.replaceAll("<", "");
    confmdp = confmdp.replaceAll(">", "");
    if (mdp === confmdp) {
      // console.log("confmdp ok");
      errConfMdp.classList.add("hidden");
      errConfMdpP.classList.add("hidden");
      mdpConfOk.classList.remove("hidden");
      mdpV = regexMdp.test(mdp);
    } else {
      errConfMdp.classList.remove("hidden");
      errConfMdpP.classList.remove("hidden");
      mdpConfOk.classList.add("hidden");
    }
  });
}
mdpCheck();

// vérifie si les données saisies sont toutes valides
function accountValidation() {
  if (nameV == true && emailV == true && mdpV == true) {
    accountV = true;
    console.log("compte ok");
  }
  console.log(accountV);
  return accountV;
}

// ajoute la création de compte dans localStorage
function setAccount() {
  createAccountId.addEventListener("click", (event) => {
    event.preventDefault();
    if (accountValidation()) {
      user = {
        nom: nameUser,
        email: emailUser,
        password: mdp,
      };
      console.log("create");

      //je vérifie que le mail et le pseudo utilisateur soient inconnus
      if (!firstUser) {
        for (let i = 0; i < array.length; i++) {
          if (user.nom == array[i].nom) {
            alert("pseudo déjà connu");
            !nameunknown;
          } else {
            nameUnknown = true;
            console.log("nammeok");
          }
          if (user.email == array[i].email) {
            alert("Adresse mail déjà connue");
            !mailUnknown;
          } else {
            console.log("mailok");
            mailUnknown = true;
          }
        }
      } else {
        mailUnknown = true;
        nameUnknown == true;
      }

      //sii mail et pseudo inconnus dans la base alors je rentre le user dans le local storage
      if ((nameUnknown == true && mailUnknown == true) || firstUser == true) {
        array.push(user);
        alert("Votre compte a bien été créé");
        // localStorage.setItem(nameUser, JSON.stringify(user));
        localStorage.setItem("users", JSON.stringify(array));
        window.location.href = "login.html";
      }
    }
  });
}

setAccount();

// annulation du formulaire si on clique sur "annuler"
function cancelAccount() {
  cancelAccountId.addEventListener("click", () => {
    window.location.reload();
  });
}
