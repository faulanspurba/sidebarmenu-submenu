const list = document.querySelectorAll('.nav-links li');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');




for (const li of list) {
    li.addEventListener('click', function(e){
        if(this.parentElement.parentElement.classList.contains("close")){
            return;
        } else {
            if(this.children.length > 1){
                if(this.children[1].classList.contains('sub-menu')){
                    li.classList.toggle('show-menu')
                }
            }
        }
        
        
    })
}

hamburger.addEventListener('click', ()=>{
    sidebar.classList.toggle("close");
})
