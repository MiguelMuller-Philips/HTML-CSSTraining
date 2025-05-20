// Mensagem de boas-vindas
    let nome = prompt("Qual seu nome?");
    if (nome) {
        alert("Bem-vindo(a), " + nome + "!");
    }else(nome)[
        alert("Bem-vindo Estranho")
    ]
    

// Alternar tema claro/escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Validação do formulário
const form = document.getElementById("contatoForm");

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Limpa mensagens de erro
    document.getElementById("erroNome").textContent = "";
    document.getElementById("erroEmail").textContent = "";
    document.getElementById("erroMensagem").textContent = "";

    // Validações
    if (!nome) {
        document.getElementById("erroNome").textContent = "Nome é obrigatório.";
        valid = false;
    }

    if (!email) {
        document.getElementById("erroEmail").textContent = "Email é obrigatório.";
        valid = false;
    } else if (!validarEmail(email)) {
        document.getElementById("erroEmail").textContent = "Email inválido.";
        valid = false;
    }

    if (!mensagem) {
        document.getElementById("erroMensagem").textContent = "Mensagem é obrigatória.";
        valid = false;
    }

    if (valid) {
        alert("Formulário enviado com sucesso!\n\n" +
            "Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Mensagem: " + mensagem);
        form.reset();  
    }
});
