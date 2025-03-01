let pseudoValid = emailValid = passValid = rgpdValid = false;

const form = document.querySelector("form");
const pseudo = document.querySelector("#nickname");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const rgpd = document.querySelector("#rgpd");
const btnSubmit = document.querySelector("button");


pseudo.addEventListener("change", () => {
    if (pseudo.value.length >= 5) {
        pseudo.classList.add("is-valid");
        pseudo.classList.remove("is-invalid");
        sessionStorage.setItem("pseudo", `${pseudo.value}`);
        pseudoValid = true;
    } else {
        pseudo.classList.remove("is-valid");
        pseudo.classList.add("is-invalid");
        pseudoValid = false;
    }
    toutValid();
});

email.addEventListener("change", () => {
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexMail.test(email.value)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        sessionStorage.setItem("email", `${email.value}`);
        emailValid = true;
    } else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        emailValid = false;
    }
    toutValid();
});

pass.addEventListener("change", () => {
    if (pass.value.length >= 16) {
        pass.classList.add("is-valid");
        pass.classList.remove("is-invalid");
        sessionStorage.setItem("pass", `${pass.value}`);
        passValid = true;
    } else {
        pass.classList.remove("is-valid");
        pass.classList.add("is-invalid");
        passValid = false;
    }
    toutValid();
});

rgpd.addEventListener("change", () => {
    if (rgpd.checked) {
        rgpd.classList.add("is-valid");
        rgpd.classList.remove("is-invalid");
        sessionStorage.setItem("rgpd", `${rgpd.checked}`)
        rgpdValid = true;
    } else {
        rgpd.classList.remove("is-valid");
        rgpd.classList.add("is-invalid");
        rgpdValid = false;
    }
    toutValid();
});

function toutValid() {
    btnSubmit.disabled = !(pseudoValid && emailValid && passValid && rgpdValid);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(pseudoValid && emailValid && passValid && rgpdValid) {
        btnSubmit.removeAttribute("disabled");
        this.submit();
        alert("Votre Message a été envoyer");
    }else{
        const evenement = new Event("change");
        pseudo.dispatchEvent(evenement);
        email.dispatchEvent(evenement);
        pass.dispatchEvent(evenement);
        rgpd.dispatchEvent(evenement);
    }
});