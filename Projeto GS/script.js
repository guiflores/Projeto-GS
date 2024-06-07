const imgs = document.getElementById("img");
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "usuario" && password === "123senha!!") {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

document.getElementById("toggleLogin").addEventListener("click", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.classList.toggle("expanded");
    this.classList.toggle("rotate");
});
