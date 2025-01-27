let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

/*console.log(images)
console.log(wrapper)
console.log(imgWrapper)
console.log(close)*/

images.forEach((img, galeria) => {
    img.addEventListener("click", () =>{
        openModal(`assets/img${galeria}.jpg`);
    });
});

close.addEventListener("clcik", () => (wrapper.style.display = "none"));

function openModal(pic) {
    wrapper.style.display = "flex";
    imgWrapper.src = pic;
}