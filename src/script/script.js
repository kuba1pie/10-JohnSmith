import portfolioData from './portfolio.json'
import skillsData from './skills.json'
let x = window.matchMedia("(max-width: 1230px)")
window.onload = function() {
    window.onscroll = navMenuScroll;
    portfolioMenu(); // Create menu of portfolio section
    resize() // Call listener function at run time
    x.addListener(resize) // Attach listener function on state changes 
    skills()
}
function addItem(wrapper, item, id, cla, portfolioFilter, bg){
    let el = document.createElement("div")
    el.classList.add(cla,'animated', 'bounceIn', 'slow')
    el.style.backgroundImage = "url('./src/style/"+ bg +".png')";
    el.id = id
    el.innerHTML = item
    el.addEventListener("click", portfolioFilter);
    wrapper.appendChild(el)
}
function navMenuHide(){
    document.getElementById("navMenu").classList.remove("animated", "slideInDown")
    document.getElementById("navMenu").classList.add("animated", "slideOutUp", "delay-2s")
}
function navMenuScroll(){
    if (this.oldScroll > this.scrollY){
        navMenuShow();
        this.oldScroll = this.scrollY
    } else {
        navMenuHide();
        this.oldScroll = this.scrollY
    } 
}
function navMenuShow(){
    document.getElementById("navMenu").classList.remove("animated", "slideOutUp", "delay-2s")
    document.getElementById("navMenu").classList.add("animated", "slideInDown")
}
function portfolioAddWrapper(wrapperPlace){
    let wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    wrapper.id='portfolioWrapper'
    wrapperPlace.append(wrapper)
}
function portfolioFilter(){
    portfolioResetColors();
    let targetID=this.id
    this.removeEventListener("click", portfolioFilter)
    this.addEventListener("click", portfolioMenuButton)
    portfolioSetWrapper(targetID);
    this.style.color = "#a91aef"
    document.getElementById('portfolioWrapper').innerHTML=""
    let category=this.id.replace("category_", "")
    let wrapper = document.getElementById('portfolioWrapper')
    print(wrapper, category)
    if (x.matches){

    } else{
        let i
        for (i = 1; i<portfolioData.categories.length+1; i++){
            let div = document.getElementById("portfolioMenu").childNodes[i]
            div.addEventListener("click", portfolioFilter)
        }
    }
}
function portfolioMenu(){
    let wrapperMenu = document.getElementById("portfolioMenu")
    wrapperMenu.innerHTML=("")
    addItem(wrapperMenu, 'All', 'category_all', "category", portfolioShowAll)
    let i
    for (i = 0; i<portfolioData.categories.length; i++){
        let catName = portfolioData.categories[i].name
        addItem(wrapperMenu, catName, "category_"+i, "category", portfolioFilter)
    }
}
function portfolioMenuButton(){
    if(x.matches){
        let wrapper=document.getElementById("portfolioWrapper")
        if (wrapper){
            wrapper.remove();
        }
        portfolioResetColors()
    }
    if(this.id == "category_all"){
        if(x.matches){
            this.addEventListener("click", portfolioShowAll)
        }
    } else {
        if(x.matches){
            this.addEventListener("click", portfolioFilter)
        }
    }
}
function portfolioSetWrapper(aim){
    if (x.matches){
        portfolioWrapperRemove()
        let wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        wrapper.id='portfolioWrapper'
        let cele = document.getElementById(aim)
        cele.parentNode.insertBefore(wrapper, cele.nextSibling);
    } else {
        let target = document.getElementById('portfolioWrapper')
        if (target){
        } else{
            portfolioAddWrapper(document.getElementById('portfolio')) //Utwórz wrapper portfolio
        }
    }
}
function portfolioShowAll(){
    portfolioResetColors()
    document.getElementById('category_all').style.color = "#a91aef"
    portfolioWrapperRemove()
    if (x.matches){
        this.removeEventListener("click", portfolioShowAll)
        this.addEventListener("click", portfolioMenuButton)
        let targetID = document.getElementById('portfolioMenu').childNodes[0]
        let wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        wrapper.id='portfolioWrapper'
        targetID.parentNode.insertBefore(wrapper, targetID.nextSibling)
        let b = document.getElementById('portfolioWrapper')
        b.innerHTML=""
        let i
        let max=(document.getElementById('portfolioMenu').childNodes.length-2)
        for (i=0; i<max; i++){
            print(b, i)
        } 
        let j
        for (j = 1; j<portfolioData.categories.length+1; j++){
            let div = document.getElementById("portfolioMenu").childNodes[j]
            div.addEventListener("click", portfolioFilter)
        }
    } else {
        //document.getElementById('portfolioWrapper').innerHTML=""
        portfolioAddWrapper(document.getElementById('portfolio')) //Utwórz wrapper portfolio
        let b = document.getElementById('portfolioWrapper')
        let i
        let max=(document.getElementById('portfolioMenu').childNodes.length-1)
        for (i=0; i<max; i++){
            print(b, i)
        } 

    }
}
function portfolioResetColors(){
    // Reset  color of portfolioMenu items
    let menu = document.getElementById('portfolioMenu').childNodes
    let i
    for (i = 0; i < menu.length; i++) {
        menu[i].style.color = "black"
    }
}
function portfolioWrapperRemove(){
    let target = document.getElementById('portfolioWrapper')
    if(target){
        target.remove();
    }
}
function print(wrapper, category){
    let i
    for (i = 0; i<portfolioData.categories[category].items.length; i++){
        let itemName = portfolioData.categories[category].items[i].name
        let itemPhoto = portfolioData.categories[category].items[i].photo
        let itemDesc = portfolioData.categories[category].items[i].description
        let divHtml="<div class='name'><h3>"+itemName+"</h3></div><div class='desc'><p>"+itemDesc+"</p></div>"
        let bg = i+1
        let id = ''
        let cla = "item"
        addItem(wrapper, divHtml, id, cla, null ,bg )
    }
}
function resize() {
    portfolioWrapperRemove()
    portfolioResetColors()
    if (x.matches){
    } else {
        portfolioShowAll();
    }
}
function skills() {
    
    let i
    for (i=0; i<skillsData.skills.length; i++){
        let wrapper = document.getElementById("skillsWrapper")
        let id = (skillsData.skills[i].id)
        let name = (skillsData.skills[i].name)
        let procent = (skillsData.skills[i].progress)
        let divHtml = "<h4>"+name+ "</h4><div class='bar'><div class='procent' id='skill_"+ id +"'></div><div class='gradient'></div></div>"
        let div = document.createElement("div")
        div.innerHTML=divHtml
        div.classList.add('item')
        wrapper.appendChild(div)
        console.log(procent)
        document.getElementById('skill_'+id).style.width = procent+'%'
    }
}