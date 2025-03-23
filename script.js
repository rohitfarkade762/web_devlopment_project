let cart = [];

function addToCart(button) {
    const product = button.parentElement;
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);
    const imageSrc = product.querySelector("img").src; // Get correct product image

    cart.push({ id, name, price, imageSrc });
    console.log(name);

    document.getElementById('cart-count').innerText = cart.length;
    updateCart();
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; 
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}">
            ${item.name} - ${item.price}₹ 
            <button class = "removebtn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(div);
    });

    document.getElementById('sumprice').innerText = `${totalPrice}₹`;
    document.getElementById('sumprice2').innerText = `${totalPrice}₹`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    document.getElementById('cart-count').innerText = cart.length;
    updateCart();
}

function showPage(page) {
    document.getElementById('items').classList.add('hidden');
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('payment').classList.add('hidden');
    document.getElementById(page).classList.remove('hidden');
}