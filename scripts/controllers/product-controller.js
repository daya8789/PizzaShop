// Product Controller - It is a Glue b/w View and Model
// Controller - I/O View Layer
// Data Exchange b/w view and Model.
import productOperations from "../services/product-operation.js";

async function loadPizzas(){
    const pizzas = await productOperations.loadProducts();
    console.log('Pizza are ', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();


function addToCart(){
    console.log("Add To Cart...", this);
    const currentButton = this;
    const pizzaId = currentButton.getAttribute('product-id');
    console.log("The Pizza id Is....", pizzaId);
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket(){
    const cartProducts = productOperations.getProductsInCart();
    const basket = document.querySelector('#basket');
    basket.innerHTML='';
    for(let product of cartProducts){
        const li = document.createElement('li');
        li.innerText = `${product.name} ${product.price}`;
        basket.appendChild(li);
    }
}

function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card=body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;
    const button = document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener('click', addToCart);// Event bind
    button.className = 'btn btn-primary';
    button.innerText = 'Add to Cart';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
}