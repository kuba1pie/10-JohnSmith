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
    addItem(wrapperMenu, 'All', 'all', "all", filter)
    let i
    for (i = 0; i<portfolioData.categories.length; i++){
        let catName = portfolioData.categories[i].name
        addItem(wrapperMenu, catName, "category_"+i, "category", filter)
    } 
    filter()
}
function addItem(wrapper, item, id, cla, filter){
    let el = document.createElement("div")
    el.classList.add(cla)
    el.id = id
    el.innerHTML = item
    el.addEventListener("click", filter);
    wrapper.appendChild(el)
}
function filter(){
    let wrapper=document.getElementById("portfolioWrapper")
    if (this == null || this.id == 'all'){
        let i
        let max=3
        for (i=0; i<max; i++){
            print(wrapper, i)
        }
    } else {
        wrapper.innerHTML=""
        let category=this.id.replace("category_", "")
        print(wrapper, category)
    }
}
function print(wrapper, category){
    let i
    for (i = 0; i<portfolioData.categories[category].items.length; i++){
        let itemName = portfolioData.categories[category].items[i].name
        let itemPhoto = portfolioData.categories[category].items[i].photo
        let itemDesc = portfolioData.categories[category].items[i].description
        let divHtml="<h3>"+itemName+"</h3><img src=src/style/"+(i+1)+".png alt='"+itemName+"'><p>"+itemDesc+"</p>"
        let id = ''
        let cla = "item"
        addItem(wrapper, divHtml, id, cla)
    }
}