const innclude = document.querySelectorAll("div");
console.log(innclude);

document.addEventListener("DOMContentLoaded", e => {
    const includeHTML = (el, url) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", e => {
            if(xhr.readyState !==4) return

            if(xhr.status >=200 && xhr.status < 300){
                let html = xhr.responseText;
                el.outerHTML = html;
            }
            else{
                let message = xhr.statusText || "Error al cargar el archivo, verifica que estes haciendo la peticion por http o https";
                el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`
            }
        });

        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
        xhr.send();
    }

    document.querySelectorAll("[data-include]").forEach(el => includeHTML(el, el.getAttribute("data-include")));
})