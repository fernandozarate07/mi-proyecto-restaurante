function loadContact() {
    const mainContent = document.querySelector('.main__content');
    const about = document.createElement('p');
    about.classList.add('about');
    about.textContent = `
        WorldPizza was born in 1998 from a dream of bringing authentic flavors from around the world to a local community. 
        Our founder, Giovanni Rossi, inspired by his travels through Italy, New York, and Buenos Aires, 
        wanted to create a place where people could enjoy not only traditional pizza but creative combinations 
        that celebrate diverse culinary traditions. From the classic Margarita to our signature Fugazzeta, 
        we combine passion, quality ingredients, and a warm atmosphere to offer you a slice of the world right at home.

        Contact us:
        Phone: (555) 123-4567
        Email: worldpizza@pizzalovers.com
    `;

    mainContent.appendChild(about);
}

export { loadContact };
