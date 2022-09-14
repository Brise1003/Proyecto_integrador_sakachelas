let carts = document.querySelectorAll('.add-cart');

// ARREGLO CON LOS PRODUCTOS
let products = [ 
    {
        name: "Cerveza 1",
        tag: "cerveza1",
        price: 90,
        inCart: 0  
    },
    {
        name: "Cerveza 2",
        tag: "cerveza2",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 3",
        tag: "cerveza3",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 4",
        tag: "cerveza4",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 5",
        tag: "cerveza5",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 6",
        tag: "cerveza6",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 7",
        tag: "cerveza7",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 8",
        tag: "cerveza8",
        price: 90,
        inCart: 0
    },
    {
        name: "Cerveza 9",
        tag: "cerveza9",
        price: 90,
        inCart: 0
    }
];

// FUNCIÓN AÑADIR AL CARRITO
for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

// FUNCIÓN GUARDAR EN LOCAL STORAGE
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}


function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./Assets/Img/${item.tag}.jpeg" />
            <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">$${item.inCart * item.price},00</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart},00</h4>
            </div>`

        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        });
    }
}

onLoadCartNumbers();
displayCart();


// Alerta
//confirmación de edad 
// swal.fire({
//     title: "Uso de cookies",
//     confirmButtonText: "Aceptado"
    
// })

// //aviso de privacidad
// swal.fire({
//     title:"Aviso de privacidad",
//     html: "<p>Teléfonos de la oficina de privacidad: 555-55 </p> <br> Correo electrónico: ventas@cervexxa.mx <br> <b>Definiciones</b>. <br>Datos personales: Cualquier información concerniente a una persona física identificada o identificable. <br>Titular: La persona física (TITULAR) a quien identifica o corresponden los datos personales. <br>Responsable: Persona física o moral de carácter privado que decide sobre el tratamiento de los datos personales. <br>Tratamiento: La obtención, uso (que incluye el acceso, manejo, aprovechamiento, transferencia o disposición de datos personales), divulgación o almacenamiento de datos personales por cualquier medio. <br>Transferencia: Toda comunicación de datos realizada a persona distinta del responsable o encargado del tratamiento.<br>Derechos ARCO: Derechos de acceso, rectificación, cancelación y oposición. <br>Consentimiento Tácito: Se entenderá que el titular ha consentido en el tratamiento de los datos, cuando habiéndose puesto a su disposición el Aviso de Privacidad, no manifieste su oposición.<br><b>Fines de la información.</b> <br>Sus datos personales serán utilizados para los siguientes fines:<br>Fines de marketing <br>Fines de contacto <br>Fines para conocer requerimientos del proyecto",
//     width:`85%`
// })
     

