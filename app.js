window.addEventListener('scroll', function(){

    let sticky_bar = document.querySelector('#sticky_bar')
    if(window.pageYOffset >= 760){
        sticky_bar.classList.add('sticky2')
    }else{
        sticky_bar.classList.remove('sticky2')

    }
    
})
window.addEventListener('scroll', function(){

    let rights = document.querySelector('#rights')

    if(window.pageYOffset >= 760){
        rights.classList.add('sticky3')
    }else{
        rights.classList.remove('sticky3')

    }
    
})