const arrows = document.querySelectorAll('.arrow');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');




for (const arrow of arrows) {
    arrow.addEventListener('click', (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("show-menu");
    })
}

hamburger.addEventListener('click', ()=>{
    sidebar.classList.toggle("close");
})
