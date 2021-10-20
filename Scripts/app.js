let arrow  = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
       
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("show");
    });
}