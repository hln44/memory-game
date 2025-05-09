let connect = document.getElementById("connect");
let cancelConnect = document.getElementById("cancelConnect");
let nameId = document.getElementById("name");
let emailId = document.getElementById("email");
let mdpId = document.getElementById("mdp");

//récupérer les utilisateurs du localstorage
getUsers = localStorage.getItem("users");
array = JSON.parse(getUsers);

// Au clic sur "Connexion" je vérifie que les données saisies correspondent bien à un utilisateur du local storage 
// si ok je redirige l'utilisateur vers la page de son profil
// sinon j'affiche un message d'erreur
connect.addEventListener("click", (event) => {
  event.preventDefault();
  let name = nameId.value;
  let email = emailId.value;
  let mdp = mdpId.value;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].password);
    if (name == array[i].nom) {
      if (email == array[i].email && mdp == array[i].password) {
        alert("Vous êtes connecté")
        window.location.href = "profil.html";
        sessionStorage.setItem("currentUser",JSON.stringify(array[i]));

      } else if (email != array[i].email && mdp != array[i].password) {
        alert("Vérifier vos données saisies");
      } else if (email != array[i].email) {
        alert("Email inconnu");
      } else if (mdp != array[i].password) {
        alert("Mot de passe incorrect");
      }
    } else if (email == array[i].email && mdp == array[i].password) {
      alert("Identifiant inconnu");
    }
  }
});

