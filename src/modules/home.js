function loadHome() {
    const mainContent = document.getElementById('main-content');

    const home = document.createElement('div');
    home.classList.add('home');
    mainContent.appendChild(home);

    const homeImgOne = document.createElement('img');
    homeImgOne.src = 'img/30-minutos-entrega-domicilio-gratis-concepto-repartidor-pizza-conduciendo-rapido_560226-417.avif';
    homeImgOne.classList.add('home__img');
    home.appendChild(homeImgOne);

    const homeImgTwo = document.createElement('img');
    homeImgTwo.src = 'img/all singapore deals pizza hut 20 percent off on cny.png';
    homeImgTwo.classList.add('home__img'); 
    home.appendChild(homeImgTwo);
}
export{loadHome};
