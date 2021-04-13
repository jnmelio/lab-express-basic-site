let btnAbout = document.querySelector('.about')
let btnWorks = document.querySelector('.works')

function about () {
    location.href = "http://127.0.0.1:3000/about"
}
function works() {
    location.href = "http://127.0.0.1:3000/works"
}
btnAbout.addEventListener('click', () => {
    about()
})
btnWorks.addEventListener('click', () => {
    works()
})