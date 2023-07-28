const mobil_side_bar_button = document.getElementById("mobil_side_bar_button")
const mobil_side_bar_close_button = document.getElementById("mobil_side_bar_close_button")
const mobil_side_bar = document.getElementById("mobil_side_bar")
mobil_side_bar_button.addEventListener("click", e =>{
    console.log('ss');
    mobil_side_bar.style.left = "0"
})

mobil_side_bar_close_button.addEventListener("click",e => {
    mobil_side_bar.style.left = "-500px"
})