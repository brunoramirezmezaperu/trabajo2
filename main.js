const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

inicio.addEventListener("click", ()=> {
    nav.classList.remove("visible")
  })
  
  equipo.addEventListener("click", ()=> {
    nav.classList.remove("visible")
  })
  
  partidos.addEventListener("click", ()=> {
    nav.classList.remove("visible")
  })
  
  noticias.addEventListener("click", ()=> {
    nav.classList.remove("visible")
  })
  