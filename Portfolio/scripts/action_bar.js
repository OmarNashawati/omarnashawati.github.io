 //E V E N T   L I S T E N E R s
 document.addEventListener('click',function(e){

    if(e.target.id === 'mobil_navbar_btn'){
       openMobileNavbar()
    }
    
    if(e.target.id === 'close'){
        closeMobileNavbar()
    }
})



function openMobileNavbar(){
    const navbar_links_container = document.getElementById('navbar_links_container')
    navbar_links_container.style.right = '0'
}

function closeMobileNavbar(){
    const navbar_links_container = document.getElementById('navbar_links_container')
    navbar_links_container.style.right = '-250px'
}
