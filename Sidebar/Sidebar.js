const bar = document.querySelector(".sidebar-toggle");
const times = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");


bar.addEventListener("click",function(){
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    } 
    else{
        sidebar.classList.add("show-sidebar")
    }
})
times.addEventListener("click",function(){
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }
   
})

/* Using the toggle method, which is a shorter way to do it

bar.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
})
times.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
})*/