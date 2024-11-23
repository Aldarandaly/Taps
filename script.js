let btnS = document.querySelectorAll('.btn')
let content = document.querySelectorAll('.content')

btnS.forEach((tab, index) => {

    tab.addEventListener('click', (e) => {
    btnS.forEach(tab => {tab.classList.remove('active')})
    tab.classList.add('active')

    let line = document.querySelector('.line')
    line.style.width = e.target.offsetWidth + "px"
    line.style.left = e.target.offsetLeft + "px"

    content.forEach(index => {index.classList.remove('active')})
    content[index].classList.add('active')
   })
})






