function loadMenu() {
    const pizzas = [
        {
            name: 'Margarita',
            price: 8.99,
            ingredients: ['tomato', 'cheese', 'basil']
        },
        {
            name: 'Pepperoni',
            price: 10.99,
            ingredients: ['tomato', 'cheese', 'pepperoni']
        },
        {
            name: 'Hawaiian',
            price: 9.99,
            ingredients: ['tomato', 'cheese', 'ham', 'pineapple']
        },
        {
            name: 'Fugazzeta',
            price: 11.49,
            ingredients: ['cheese', 'onion', 'oregano']
        }
    ];

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu__container');

    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement('div');
        pizzaCard.classList.add('pizza__card');

        const pizzaTitle = document.createElement('h2');
        pizzaTitle.textContent = pizza.name;

        const pizzaPrice = document.createElement('p');
        pizzaPrice.textContent = `$${pizza.price.toFixed(2)}`;

        const pizzaIngredients = document.createElement('p');
        pizzaIngredients.textContent = `Ingredients: ${pizza.ingredients.join(', ')}`;

        pizzaCard.appendChild(pizzaTitle);
        pizzaCard.appendChild(pizzaPrice);
        pizzaCard.appendChild(pizzaIngredients);
        
        menuContainer.appendChild(pizzaCard);
    });

    const mainContent = document.querySelector('.main__content');
    mainContent.appendChild(menuContainer);
}

export { loadMenu };
