let hamburgerButton = document.querySelector('.hamburger-button');
let toggleContainer = document.querySelector('.toggle-container');
let isToggleVisible = false;

hamburgerButton.addEventListener('click', function (event) {
    event.stopPropagation();
    isToggleVisible = !isToggleVisible;

    if (isToggleVisible) {
        hamburgerButton.classList.add('clicked');
        toggleContainer.style.transform = 'translateY(0)';
    } else {
        hamburgerButton.classList.remove('clicked');
        toggleContainer.style.transform = 'translateY(-100%)';
    }
})