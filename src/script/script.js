import portfolioData from './portfolio.json'
window.onload = function() {
    
    portfolio()

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
    document.getElementById("navMenu").classList.add("animated", "slideOutUp", "delay-2s")
    
}
function navMenuShow(){
    document.getElementById("navMenu").classList.remove("animated", "slideOutUp", "delay-2s")
    document.getElementById("navMenu").classList.add("animated", "slideInDown")
}

function portfolio(){
    let wrapperMenu = document.getElementById("portfolioMenu")
    addItem(wrapperMenu, 'All', 'all')
    let i
    for (i = 0; i<portfolioData.categories.length; i++){
        let catName = portfolioData.categories[i].name
        addItem(wrapperMenu, catName, "category_"+catName, "category")
    } 
}
function addItem(wrapper, item, id, cla){
    let el = document.createElement("div")
    el.classList.add(cla)
    el.id = id
    el.innerHTML = item
    wrapper.appendChild(el)
}