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
    displayProduct(product,quantity)

    localStorage.setItem(product,quantity);

}


const displayProduct  = (product,quantity)=>{
    const productContainer= document.getElementById('prdct-container');
    const li = document.createElement('li');
    li.innerText=`${product}:${quantity}`;
    productContainer.appendChild(li)
}