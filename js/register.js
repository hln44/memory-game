// je récupère mes éléments
let createAccountId = document.getElementById("createAccount");
let cancelAccountId = document.getElementById("cancelAccount");
let nameId = document.getElementById("name");
let emailId = document.getElementById("email");
let mdpId = document.getElementById("mdp");
let confmdpId = document.getElementById("confmdp");


// j'initialise un booléen pour vérifier la validité de chaque valeur
let nameV = false;
let emailV = false;
let mdpV = false;
let confmdpV = false;
let accountV = false;

// je retire les espaces et chevrons puis je vérifie que le nom comporte au moins 3 caractères

function nameValidation() {    
    name = nameId.value;
    console.log(name);
  name = name.replace(" ", "");
  name = name.replace("<", "");
  name = name.replace(">", "");
  if (name.length >= 3) {
    nameV = true;
  }
  console.log(nameV);
  
  return nameV;
}

// je retire les espaces et chevrons puis je vérifie que email corresponde à la RegExp
function emailValidation() {
    email = emailId.value;
    console.log(email);
    
  const regexEmail = new RegExp(/^[\w\-\.]+@([\w-]+.)+[\w-]{2,}$/);
  email = email.replaceAll(" ", "");
  email = email.replaceAll("<", "");
  email = email.replaceAll(">", "");
  emailV = regexEmail.test(email);
  console.log(mdpV);
  return emailV;
  
}

// je retire les espaces et chevrons puis je vérifie que mdp corresponde à la RegExp et soit égal à confmdp
function mdpValidation() {
    mdp = mdpId.value;
    confmdp = confmdpId.value;
  mdp = mdp.replaceAll(" ", "");
  mdp = mdp.replaceAll("<", "");
  mdp = mdp.replaceAll(">", "");
  confmdp = confmdp.replaceAll(" ", "");
  confmdp = confmdp.replaceAll("<", "");
  confmdp = confmdp.replaceAll(">", "");

  const regexMdp = new RegExp(
    /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
  );
  if (mdp.length >= 6 && mdp === confmdp) {
    mdpV = regexMdp.test(mdp);
  }
  console.log(mdpV);
  return mdpV; 
  
}

function accountValidation() {
  if ((nameValidation(name)) && (emailValidation()) && (mdpValidation())) {
    accountV = true;
    console.log("compte ok");
    
  }
  console.log(accountV);
  return accountV;
}

createAccountId.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(nameId.value);
    console.log("click");
    let i = 0;
  if (accountValidation()) {
    console.log("create");
    
    let nameUser = {
        name:name,
      email: email,
      password: mdp,
    };
    i++;
    localStorage.setItem(name, JSON.stringify(nameUser));   
    
  }
});
