const themeSelect = document.querySelector('#theme-select');

themeSelect.addEventListener('change', changeTheme);

function changeTheme(event) {
    const selectedTheme = event.target.value;
    const body = document.querySelector('body');
    const logo = document.querySelector('.logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/logo.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'images/logo.webp';
    }
}

const themeSelector = // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);