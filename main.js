let colores = document.querySelector('.colores')
let btn = document.querySelector('.btn')
let exa_color = document.querySelector('.exa_color')
let visual_color = document.querySelector('.visual_color')

btn.addEventListener('click',()=>{
    exa_color.textContent = colores.value
    visual_color.style.background = colores.value
})