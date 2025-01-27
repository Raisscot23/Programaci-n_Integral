const titulo = document.querySelector("#logo");
const montañas = document.querySelector("#party");
const plumas = document.querySelector("#plumas");

window.addEventListener("scroll", () => {
    console.log("se esta haciendo scroll");

    let scrolly = window.scrollY;
    document.querySelector("#logo").style.top = scrolly * 1 + "px";
    document.querySelector("#plumas").style.bottom = scrolly * 1 + "px";
})