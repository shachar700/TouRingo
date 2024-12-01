const header = document.querySelector('h1')
const app = document.getElementById('app')
const ddMenu = document.querySelector('#ddMenu')
const sandwitch = document.querySelectorAll('svg')
const html = document.documentElement

const toggle = () => html.classList.toggle('dark')

function gotoLogin(){
    console.log("Going to login")
    window.location.href = "./login/login.html"
}

const setView = (v) => {
    header.innerText = v
    toggleMenu(true)

    if (v === 'Home') {
        renderHome()
    } else if (v === 'Attractions') {
        renderAbout()
    } else if (v === 'Contact') {
        renderContact()
    }
}

const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden')
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden')
        })
    } else {
        ddMenu.classList.add('hidden')
        document.querySelectorAll('svg')[0].classList.remove('hidden')
        document.querySelectorAll('svg')[1].classList.add('hidden')
    }
}

const renderHome = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Home</div>'
}

const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Attractions</div>'
}

const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>'
}

const renderMenu = () => {
    // to do
}

const renderThemeToggle = () => {
    // to do
}

renderMenu()
renderThemeToggle()
renderHome()