// home.js
import imgOne from '../img/imgOne.avif';
import imgTwo from '../img/imgTwo.png';

function loadHome() {
    const mainContent = document.querySelector('.main__content');

    const homeImgOne = document.createElement('img');
    homeImgOne.src = imgOne;
    mainContent.appendChild(homeImgOne);

    const homeImgTwo = document.createElement('img');
    homeImgTwo.src = imgTwo;
    homeImgTwo.classList.add('home__img'); 
    mainContent.appendChild(homeImgTwo);
}
export{loadHome};
