let pseudoValid = emailValid = passValid = rgpdValid = false;

const btnSubmit = document.querySelector("button");
function toutValid() {
    btnSubmit.disabled = !(pseudoValid && emailValid && passValid && rgpdValid);
}

const pseudo = document.querySelector("#nickname");
pseudo.addEventListener("change", function () {
    if (pseudo.value.length < 5) {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        pseudoValid = false;
    }else{
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        pseudoValid = true;
    }
    toutValid();
});

const email = document.querySelector("#email");
email.addEventListener("change", function() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(email.value)){
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        emailValid = true;
    }else{
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        emailValid = false;
    }
    toutValid();
});

const pass = document.querySelector("#pass");
pass.addEventListener("change", function() {
    if(pass.value.length < 16){
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
        passValid = false;
    }else{
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        passValid = true;
    }
    toutValid();
});
const rgpd = document.querySelector("#rgpd");
rgpd.addEventListener("change", function() {
    if(rgpd.checked){
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        rgpdValid = true;
    }else{
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
        rgpdValid = false;
    }
    toutValid();
});

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(pseudoValid && emailValid && passValid && rgpdValid) {
        btnSubmit.removeAttribute("disabled");
    }else{
        const evenement = new Event("change");
        pseudo.dispatchEvent(evenement);
        email.dispatchEvent(evenement);
        pass.dispatchEvent(evenement);
        rgpd.dispatchEvent(evenement);
    }
    sessionStorage.setItem("pseudo", `${pseudo.value}`);
    sessionStorage.setItem("email", `${email.value}`);
    sessionStorage.setItem("rgpd", `${rgpdValid}`);
});

const pseudoSession = sessionStorage.getItem("pseudo");
const emailSession = sessionStorage.getItem("email");
const rgpdSession = sessionStorage.getItem("rgpd");
if(pseudoSession && emailSession && rgpdSession){
    alert(`Le pseudo stocker est 🤡${pseudoSession}, et l'email stocker est 🖥️${emailSession} et le rgdp cocher est 👁️${rgpdSession}`);
}else{
    alert("Aucune information n'est stocker dans le sessionStorage");
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function() {
    if(!(pseudoSession && emailSession && rgpdSession)){
        alert("Le stockage est vide !! 👌🤷‍♂️");
        return;
    }
    if(confirm("Voulez vous supprimer les stockage sessions?🖥️🤦‍♂️")){
        sessionStorage.clear();
    }
});
