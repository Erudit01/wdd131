const themeSelect = document.querySelector('#theme-select');

themeSelect.addEventListener('change', changeTheme);

function changeTheme(event) {
    const selectedTheme = event.target.value;
    console.log(event)
    const body = document.querySelector('body');
    const logo = document.querySelector('.logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'images/logo.webp';
    }
}