// scripts.js

// Aplicar máscara ao campo de telefone
document.addEventListener("DOMContentLoaded", function() {
    VMasker(document.getElementById("phone")).maskPattern("(99) 99999-9999");
});

function toggleForm() {
    const form = document.getElementById("myForm");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}