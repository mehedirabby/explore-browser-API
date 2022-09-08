const getInputValueById =id=>{
    const inputFld = document.getElementById(id);
    const inputValue = inputFld.value;
    inputFld.value=' ';
    return inputValue;
}


const addProducts=()=>{
    const product = getInputValueById('prdct-nm-fld');
    const quantity = getInputValueById('prdct-qnt-fld')
    console.log(product)
    console.log(quantity)
    //display on ui
    addProductToDisplay(product,quantity)
    //set to local storage
    //simple way
    //localstorage.setItem(product,quantity)
    saveItemsToLocalStorage(product,quantity)

}
const getShoppingCartFromLocalStorage = ()=>{
    let saveCart = localStorage.getItem('cart');
    let cart={};
    if(saveCart){
        cart = JSON.parse(saveCart);
    }
    return cart;
}

const saveItemsToLocalStorage =(product,quantity)=>{
    const cart = getShoppingCartFromLocalStorage();
    //add product to the object as property
    cart[product]=quantity;
    const cartStringified = JSON.stringify(cart);
    //save to local storage
    localStorage.setItem('cart',cartStringified);

}

const addProductToDisplay  = (product,quantity)=>{
    const productContainer= document.getElementById('prdct-container');
    const li = document.createElement('li');
    li.innerText=`${product}:${quantity}`;
    productContainer.appendChild(li)
}

const displayStoredProducts=()=>{
    const cart = getShoppingCartFromLocalStorage()
    for(const product in cart){
        const quantity = cart[product]
        console.log(product,quantity)
        addProductToDisplay(product,quantity)
    }
}
displayStoredProducts();