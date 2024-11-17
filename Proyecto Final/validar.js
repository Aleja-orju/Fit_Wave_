// Manejo de formularios
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const message = document.getElementById("message");
    if (response.ok) {
        message.textContent = "Inicio de sesión exitoso.";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
});

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });

    const message = document.getElementById("message");
    if (response.ok) {
        message.textContent = "Registro exitoso.";
        message.style.color = "green";
    } else {
        const errorText = await response.text();
        message.textContent = errorText;
        message.style.color = "red";
    }
});