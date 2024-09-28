const modalBtn = document.querySelector(".modal-btn");
const container = document.querySelector(".modal-overlay");
const times = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function(){
    container.classList.add("open-modal");
});
times.addEventListener("click", function(){
    container.classList.remove("open-modal");
    console.log(container.classList);
});
