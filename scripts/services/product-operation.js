// Contains the logic for Fectching , 
// Adding, Sorting, Searching,
// Deletion, Updation
/*
    It talk to network layer to Bring the JSOn, and 
    convert JSON into Objects vice-versa

*/
import doNetworkCall from "./api-client.js";
import Product from "../models/product.js";

const productOperations = {
    products:[], // key:Value

    search(pizzaId){
        const product = this.products.find(currentProduct=>currentProduct.id == pizzaId);
        console.log("Product Found", product);
        product.isAddedInCart = true;
        console.log('Array ', this.products);
    },

    getProductsInCart(){
        const productInBasket = this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },

    async loadProducts(){
        const pizzas = await doNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url)
            return currentPizza;
        })
        console.log('Product Array', productsArray);
        this.products = productsArray;
        return productsArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperations;