const pseudoSession = sessionStorage.getItem("pseduo");
const emailSession = sessionStorage.getItem("email");
const passSession  = sessionStorage.getItem("pass");
const afficher = document.querySelector("#afficher");
if(pseudoSession === null && emailSession === null && passSession === null){
    afficher.classList.remove("active");
    afficher.classList.add("hide");
    alert("Remplissez tout le champs avant");
}else{
    afficher.classList.add("active");
    afficher.classList.remove("hide");
    afficher.textContent = `Le nom stocker est ${pseudoSession} et l'email est ${emailSession} et le password est ${passSession}`;
}

const btnReset = document.querySelector("#btnreset");
btnReset.addEventListener("click", function() {
    if (pseudoSession === null && emailSession === null && passSession === null) {
        alert("Rien à effacer, le stockage est vide");
    }else{
        if(confirm("Êtes-vous sûr de vouloir supprimer les stockages Sessions")){
            sessionStorage.clear();
        }
    }
});