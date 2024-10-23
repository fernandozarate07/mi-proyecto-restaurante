// contact.js
function loadContact(){
    const mainContent = document.querySelector('.main__content');
    const about = document.createElement('p');
    about.classList.add('about');
    about.textContent = `WorldPizza nació en 1998 a partir del sueño de llevar sabores auténticos de todo el mundo a una comunidad local. Nuestro fundador, Giovanni Rossi, inspirado por sus viajes por Italia, Nueva York y Buenos Aires, quería crear un lugar donde la gente pudiera disfrutar no solo de la pizza tradicional, sino de combinaciones creativas que celebraran las diversas tradiciones culinarias del mundo. Desde la clásica Margarita hasta nuestra emblemática Fugazzeta, combinamos pasión, ingredientes de calidad y un ambiente cálido para ofrecerle una porción del mundo, aquí mismo, en su casa.

    Hoy en día, WorldPizza sigue sirviendo pizzas deliciosas y artesanales con amor y cuidado. Ya sea que esté cenando con amigos, disfrutando de una noche tranquila en casa o celebrando una ocasión especial, nuestras pizzas están hechas para unir a las personas.
    
    Contáctenos: Teléfono: (555) 123-4567
    Correo electrónico: worldpizza @pizzalovers .com`;

    mainContent.appendChild(about);
}
export {loadContact};