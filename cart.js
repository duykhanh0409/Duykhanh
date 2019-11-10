(function() {
    const cartInfor = document.getElementById("cart-infor");
    const cart = document.getElementById("cart");

    cartInfor.addEventListener('click', function() {
        cart.classList.toggle("show-cart");
    });
})();

// add to cart

(function() {
    const cartBtn = document.querySelectorAll('.button');

    cartBtn.forEach(function(btn) {
            btn.addEventListener('click', function(event) {
                //hiện ra những gì ta click vào
                //console.log(event.target);
                if (event.target.parentElement.classList.contains("button")) {
                    let fullPath = event.target.parentElement.previousElementSibling.src;
                    let pos = fullPath.indexOf("img") - 9;
                    let partPath = fullPath.slice(pos);
                    // tạo một object
                    const item = {};
                    item.img = `./image2${partPath}`;
                    let name = event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].textContent;
                    item.name = name;
                    let price = "190.000";
                    item.price = price;
                    console.log(item);
                    //console.log(name);

                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item", "d-flex", "justuify-content-between", "text-capitalize", "my-3");
                    cartItem.innerHTML =
                        `<img src="${item.img}" width="50px" height="50px" class="img-fluid rounded-circle" id="item-img">
                <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold md-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
                </div>
                <a href="" class="cart-item-remove" id="cart-item-remove">
                    <i class="fa fa-trash-o"></i>
                </a>`;
                    //chọn cart item
                    const cart = document.getElementById('cart');
                    const total = document.querySelector('.cart-total-container');
                    //chèn sản phẩm vừa chọn vào sau total.
                    cart.insertBefore(cartItem, total);
                    alert('item add to the cart');
                    showTotal();
                }
            })
        })
        //show total
    function showTotal() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
            console.log(total);
        });
        const TotalMoney = total.reduce(function(total, item) {
            total += item;
            return total;
        }, 0);
        const finalMoney = TotalMoney.toFixed(2);
        // console.log(finalMoney);
        document.getElementById('cart-total').textContent = finalMoney;

    }
    var clear = document.getElementById('clear-cart');
    clear.addEventListener('click', function() {
        document.querySelectorAll('.cart-item') = "";
    })

})();