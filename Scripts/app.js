let arrow  = document.querySelectorAll(".arrow");
let nav = document.querySelector(".nav");
let bars = document.querySelector(".fa-bars");

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
       
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent)
        arrowParent.classList.toggle("show");
    });
}
bars.addEventListener("click", ()=>{
    nav.classList.toggle('close')
})

