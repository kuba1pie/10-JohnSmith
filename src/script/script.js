window.onload = function() {
    window.onscroll = function (e) {  
        if (this.oldScroll > this.scrollY){
            navMenuShow();
            this.oldScroll = this.scrollY
        } else {
            navMenuHide();
            this.oldScroll = this.scrollY
        } 
    }
}

function navMenuHide(){
    document.getElementById("navMenu").classList.remove("animated", "slideInDown")
    document.getElementById("navMenu").classList.add("animated", "slideOutUp")
    
}
function navMenuShow(){
    document.getElementById("navMenu").classList.remove("animated", "slideOutUp")
    document.getElementById("navMenu").classList.add("animated", "slideInDown")
}