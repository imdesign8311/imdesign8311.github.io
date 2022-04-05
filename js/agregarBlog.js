let agregar = document.querySelector("[data-atributte]");
let f = document.querySelector(".sub-menu.sub-menu-blog li");
console.log(agregar, f)
document.addEventListener("click", e => {
    if (e.target.matches("ul li")) {
        console.log(e.target.id, agregar);
        includeHTML(agregar, e.target.id);
    }
});

const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return

        if (xhr.status >= 200 && xhr.status < 300) {
            let html = xhr.responseText;
            el.innerHTML = html;
        }
        else {
            let message = xhr.statusText || "Error al cargar el archivo, verifica que estes haciendo la peticion por http o https";
            el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
}

document.addEventListener("DOMContentLoaded", e => {
    includeHTML(agregar, "assets/html/blog/mi-historia.html");
})