const toggleButton = document.getElementById('toggleButton');
const toggleMenu = document.getElementById('toggleMenu');

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle('toggle-button-click')
    toggleMenu.classList.toggle('hidden')
    toggleMenu.classList.toggle('flex')
    })