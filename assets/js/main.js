let mobileMenu=document.getElementsByClassName('mobileMenu')[0]
let menuControl =document.getElementsByClassName('menuControl')[0]
let mobileMenuContainer=document.getElementsByClassName('mobileMenuContainer')[0]
let backBtn=document.getElementsByClassName('backBtn')[0]

menuControl.addEventListener('click',()=>{
    mobileMenu.style.zIndex="99"
    mobileMenu.style.marginRight="0"
    mobileMenuContainer.style.zIndex="98"
    mobileMenu.style.visibility="visible"
    mobileMenuContainer.style.visibility="visible"
   
})
backBtn.addEventListener('click',()=>{
    mobileMenu.style.zIndex="-99"
    // mobileMenu.style.marginRight="-100vw"
    mobileMenuContainer.style.zIndex="-98"
    mobileMenu.style.visibility="hidden"
    mobileMenuContainer.style.visibility="hidden"
   
})
mobileMenuContainer.addEventListener('click',()=>{
    mobileMenu.style.zIndex="-99"
    // mobileMenu.style.marginRight="-100vw"
    mobileMenuContainer.style.zIndex="-98"
    mobileMenu.style.visibility="hidden"
    mobileMenuContainer.style.visibility="hidden"
   

})
