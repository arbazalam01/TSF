document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('.w3-black')
    const toggleSwitch = document.querySelector('.switch')

    toggleSwitch.addEventListener('click', () => {
        main.classList.toggle('dark-theme')
    })
})