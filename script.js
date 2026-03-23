document.getElementById('Issa').onclick = function() {
    document.getElementById('cvclick').click();
}

const form = document.getElementById("formContact");
const confirmation = document.getElementById("confirmationMessage");

// Empêcher l'erreur sur les autres pages
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        confirmation.style.display = "block";
        form.reset();
    });
}
