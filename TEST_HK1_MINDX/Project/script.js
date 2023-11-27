const menuBarBtn= document.querySelector('.header-top i')
menuBarBtn.addEventListener("click",function(){
    document.querySelector('.header-top ul').classList.toggle('active')
})