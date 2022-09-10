const getProductById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}



document.getElementById('btn-add-product').addEventListener('click', function () {
    const product = getProductById('product-name-field');
    const quantity = getProductById('product-quantity-field');
    console.log(product, quantity);

    displayProduct(product, quantity);
    //simple way to set localStorage value
    saveItemToLocalStorage(product, quantity);
})


const getItemFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}



const saveItemToLocalStorage = (product, quantity) => {
    const cart = getItemFromLocalStorage();
    cart[product] = quantity;
    const cartSringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartSringified);

}


const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    productContainer.appendChild(li);
}


const displayStoreProduct = () => {
    const cart = getItemFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}
displayStoreProduct();