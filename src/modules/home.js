import imgOne from '../img/imgOne.avif';
import imgTwo from '../img/imgTwo.png';

function loadHome() {
    const mainContent = document.getElementById('main-content');

    const home = document.createElement('div');
    home.classList.add('home');
    mainContent.appendChild(home);

    const homeImgOne = document.createElement('img');
    homeImgOne.src = imgOne;
    home.appendChild(homeImgOne);

    const homeImgTwo = document.createElement('img');
    homeImgTwo.src = imgTwo;
    homeImgTwo.classList.add('home__img'); 
    home.appendChild(homeImgTwo);
}
export{loadHome};
