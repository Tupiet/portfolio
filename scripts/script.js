const arrow = document.querySelector('#go-to-about')
const changeModeButton = document.querySelector('#change-mode-button')

const lightIcon = document.querySelector('#light-icon')
const darkIcon = document.querySelector('#dark-icon')


arrow.addEventListener('click', () => {
    setTimeout(() => {
        window.history.pushState(null,null,document.location.href.replace('#about', ''));
    }, 0);
})


const changeMode = () => {
    const nextTheme = getNextTheme()
    updateIcon(nextTheme)

    document.documentElement.setAttribute('data-theme', getNextTheme())
}

const getNextTheme = () => {
    return document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'light'
            : 'dark'
}

const updateIcon = (theme) => {
    console.log(darkIcon.style.display)
    if (theme === 'light') {
        lightIcon.style.display = 'none'
        darkIcon.style.display = 'inline-block'
    } else {
        darkIcon.style.display = 'none'
        lightIcon.style.display = 'inline-block'
    }
} 

changeModeButton.addEventListener('click', changeMode)
