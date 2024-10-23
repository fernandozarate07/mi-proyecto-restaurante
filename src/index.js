import { loadHome } from "./modules/home.js";
import { loadMenu } from "./modules/menu.js";
import { loadContact } from "./modules/contact.js";
import './root.css';
import './styles.css';

// Cargar imagen de fondo
import backgroundImg from './img/background.jpg';
document.body.style.backgroundImage = `url(${backgroundImg})`;

// Función para limpiar el contenido
function clear() {
    const mainContent = document.querySelector('.main__content');
    mainContent.innerHTML = '';
}

// Evento para Home
const homeBtn = document.getElementById('nav__home');
homeBtn.addEventListener('click', () => {
    clear();
    loadHome();
});

// Evento para Menu
const menuBtn = document.getElementById('nav__menu');
menuBtn.addEventListener('click', () => {
    clear();
    loadMenu();
});

// Evento para Contact
const contactBtn = document.getElementById('nav__contact');
contactBtn.addEventListener('click', () => {
    clear();
    loadContact();
});
