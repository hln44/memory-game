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

// j'initialise un booléen pour vérifier la validité de chaque valeur
let nameV = false;
let emailV = false;
let mdpV = false;
let confmdpV = false;
let accountV = false;

let users = []
users = localStorage.getItem(users);
console.log((users));


// je retire les espaces et chevrons puis je vérifie que le nom comporte au moins 3 caractères

// function nameValidation() {
//   let name = nameId.value;

//   name = name.replace(" ", "");
//   name = name.replace("<", "");
//   name = name.replace(">", "");
//   if (name.length >= 3) {
//     nameV = true;
//   }
//   console.log(nameV);
//   return nameV;
// }

function nameCheck() {
  nameId.addEventListener("input", () => {
    let name = nameId.value;
    if (name.length < 3) {
      errName.classList.remove("hidden");
      errNameP.classList.remove("hidden");
    } else {
      errName.classList.add("hidden");
      errNameP.classList.add("hidden");
      nameV = true;
      nameUser = name;
    }
  });
}

nameCheck();

// je retire les espaces et chevrons puis je vérifie que email corresponde à la RegExp
// function emailValidation() {
//   let email = emailId.value;
//   const regexEmail = new RegExp(/^[\w\-\.]+@([\w-]+.)+[\w-]{2,}$/);
//   email = email.replaceAll(" ", "");
//   email = email.replaceAll("<", "");
//   email = email.replaceAll(">", "");
//   emailV = regexEmail.test(email);
//   //   console.log(emailV);
//   return emailV;
// }

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
    } else {
      errMail.classList.add("hidden");
      errMailP.classList.add("hidden");
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
// function mdpValidation() {
//   mdp = mdpId.value;
//   let confmdp = confmdpId.value;
//   mdp = mdp.replaceAll(" ", "");
//   mdp = mdp.replaceAll("<", "");
//   mdp = mdp.replaceAll(">", "");
//   confmdp = confmdp.replaceAll(" ", "");
//   confmdp = confmdp.replaceAll("<", "");
//   confmdp = confmdp.replaceAll(">", "");
//   if (mdp.length >= 6 && mdp === confmdp) {
//     mdpV = regexMdp.test(mdp);
//   }
//   //   console.log(mdpV);
//   return mdpV;
// }

function mdpCheck() {
  mdpId.addEventListener("input", () => {
    mdp = mdpId.value;
    mdp = mdp.replaceAll(" ", "");
    mdp = mdp.replaceAll("<", "");
    mdp = mdp.replaceAll(">", "");

    if (mdp.length < 6 /*|| mdp != confmdp*/) {
      errMdp.classList.remove("hidden");
      errMdpP.classList.remove("hidden");
    } else if (mdp.length >= 6 /*&& (mdp === confmdp)*/) {
      errMdp.classList.add("hidden");
      errMdpP.classList.add("hidden");
      // console.log("mdp ok");
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
      mdpV = regexMdp.test(mdp);
    } else {
      errConfMdp.classList.remove("hidden");
      errConfMdpP.classList.remove("hidden");
    }
  });
}
mdpCheck();

// vérifie si les données saisies sont toutes valides
function accountValidation() {
  if (nameV == true && emailV == true && mdpV == true) {
    accountV = true;
    // console.log("compte ok");
  }
  // console.log(accountV);
  return accountV;
}

// ajoute la création de compte dans localStorage
function setAccount() {
  createAccountId.addEventListener("click", (event) => {
    event.preventDefault();
    if (accountValidation()) {
      // console.log("create");

      let user = {
        name: nameUser,
        email: emailUser,
        password: mdp,
      };
      users.push(user);
      console.log(users);
      users.forEach((newUser) => {
        console.log(newUser.name);
      });

      localStorage.setItem(nameUser, JSON.stringify(user));
      localStorage.setItem("users", JSON.stringify(users));
      window.location.reload();
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
