import {loadHome} from "./modules/home.js";
import {loadMenu} from "./modules/menu.js"
import {loadContact} from "./modules/contact.js"
import './root.css';
import './styles.css';

// body Background
import backgroundImg from './img/background.jpg';
document.body.style.backgroundImage = `url(${backgroundImg})`;

// Clear
function clear(){
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML='';
}
// Home Event
const homeBtn = document.getElementById('nav__home');
homeBtn.addEventListener('click', ()=>{
    clear()
    loadHome();
})
// Menu Event
const menuBtn = document.getElementById('nav__menu');
homeBtn.addEventListener('click', ()=>{
    clear()
    loadMenu();
})
// Contact Event
const contactBtn = document.getElementById('nav__contact');
homeBtn.addEventListener('click', ()=>{
    clear()
    loadContact();
})