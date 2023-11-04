const products = [{
    id: '44gsdsfgs',
    image: 'images/M.jpg',
    name: 'Metalgarurumon',
    rating: {
        stars: 4.5,
        count: 120
    },
    priceCents: 7999
}, {
    id: '44g5dsfgs',
    image: 'images/O.jpg',
    name: 'Omegamon',
    rating: {
        stars: 5,
        count: 205
    },
    priceCents: 14999
}, {
    id: '44gsd67gs',
    image: 'images/S.jpg',
    name: 'Skull',
    rating: {
        stars: 3.5,
        count: 97
    },
    priceCents: 4990
}, {
    id: '44gsdfj6fgs',
    image: 'images/GO.jpg',
    name: 'Gojo Satoru',
    rating: {
        stars: 3.5,
        count: 105
    },
    priceCents: 8990
}, {
    id: '44gs-55dsfgs',
    image: 'images/w.jpg',
    name: 'Wargreymon',
    rating: {
        stars: 4.5,
        count: 77
    },
    priceCents: 6990
}, {
    id: '44gs-5jfgsfgs',
    image: 'images/GO2.jpg',
    name: 'Gojo real',
    rating: {
        stars: 3.5,
        count: 107
    },
    priceCents: 5990
}];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class= "frame">
    <div class="pic1 pic ">
            <div class="mob-version">
                <img class= "s" src="${product.image}">
                <div class="name">${product.name}</div>
                <div class="star-holder"><img class="star" src="images/rating-${product.rating.stars * 10}.png"><h4>${product.rating.count}</h4> </div>
                <div class="price">
                    <p class="price-number">$${(product.priceCents / 100).toFixed(2)}</p>
                    <select name="Quantity" id="">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
            
            <div class=" btn-holder" > <button class="add-btn add" data-product-id="${product.id + " " + product.name}">Add to cart</button> </div>
        </div>
        </div>
    `;
});


document.querySelector('.js-products-holder').innerHTML = productsHTML;

let add = document.querySelectorAll('.add')

add.forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
           if(productId === item.productId){
             matchingItem = item;
           }
        });

        if(matchingItem){
          matchingItem.quantity +=1
        }else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })

        document.querySelector('.cart-number').innerHTML = cartQuantity

        console.log(cartQuantity)
        console.log(cart)
    });
});