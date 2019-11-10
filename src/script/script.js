import portfolioData from './portfolio.json'
window.onload = function() {
    portfolioMenu();
    let x = window.matchMedia("(max-width: 1230px)")
    resize(x) // Call listener function at run time
    x.addListener(resize) // Attach listener function on state changes 
    
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
function resize(x) {
    if (x.matches) { // If media query matches
      console.log('smol')
      let a = document.getElementById('portfolioWrapper')
      if (a){
          a.remove();
      }
    } else {
        console.log('big')
        let a = document.getElementById('portfolioWrapper')
        if (a){
            a.remove();
            console.log('biggggg')
            let wrapper = document.createElement("div")
            wrapper.classList.add("wrapper")
            wrapper.id='portfolioWrapper'
            document.getElementById("portfolio").append(wrapper)
            filter();
        } else {
            let wrapper = document.createElement("div")
            wrapper.classList.add("wrapper")
            wrapper.id='portfolioWrapper'
            document.getElementById("portfolio").append(wrapper)
            filter();
        }    
        
    }
}

function portfolioMenu(){
    let wrapperMenu = document.getElementById("portfolioMenu")
    wrapperMenu.innerHTML=("")
    addItem(wrapperMenu, 'All', 'category_all', "all", filter)
    let i
    for (i = 0; i<portfolioData.categories.length; i++){
        let catName = portfolioData.categories[i].name
        addItem(wrapperMenu, catName, "category_"+i, "category", filter)
    } 
}
function addItem(wrapper, item, id, cla, filter, bg){
    let el = document.createElement("div")
    el.classList.add(cla)
    el.style.backgroundImage = "url('./src/style/"+ bg +".png')";
    el.id = id
    el.innerHTML = item
    el.addEventListener("click", filter);
    wrapper.appendChild(el)
}
function filter(){
    let b = document.getElementById('portfolioWrapper')

    if(b){
        if (this == null || this.id == 'category_all'){ // jeżeli nie ma kat. lub jest all
            let i
            let max=3
            for (i=0; i<max; i++){
                print(b, i)
            }
        } else { // jeżeli jest kategoria
            document.getElementById('portfolioWrapper').innerHTML=""
            let category=this.id.replace("category_", "")
            print(b, category)
        }
    } else{
        let a = document.getElementById("portfolioWrapper")
        if (a) {
            a.remove()
        }
        let wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        wrapper.id='portfolioWrapper'
        //wstawia wrapper za wybranym
        this.parentNode.insertBefore(wrapper, this.nextSibling);
        if (this == null || this.id == 'category_all'){
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

function navMenuHide(){
document.getElementById("navMenu").classList.remove("animated", "slideInDown")
document.getElementById("navMenu").classList.add("animated", "slideOutUp", "delay-2s")

}
function navMenuShow(){
    document.getElementById("navMenu").classList.remove("animated", "slideOutUp", "delay-2s")
    document.getElementById("navMenu").classList.add("animated", "slideInDown")
}
