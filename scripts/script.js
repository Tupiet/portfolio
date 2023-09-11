const arrow = document.querySelector('#go-to-about')
arrow.addEventListener('click', () => {
    setTimeout(() => {
        window.history.pushState(null,null,document.location.href.replace('#about', ''));
    }, 0);
})