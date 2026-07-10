
window.onload = function() {
    updateCartUI();
};

function App_Click(item) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart.push(item);
    localStorage.setItem('myCart', JSON.stringify(cart));
    alert(item + " added!");
    updateCartUI(); // تحديث فوري لواجهة السلة
}
function toggleCart() {
    let cartDiv = document.getElementById('cart-items');
    if (cartDiv.style.display === "none" || cartDiv.style.display === "") {
        cartDiv.style.display = "block";
        updateCartUI();
    } else {
        cartDiv.style.display = "none";
    }
}


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    cart.splice(index, 1); // مسح العنصر
    localStorage.setItem('myCart', JSON.stringify(cart)); // حفظ التعديل
    updateCartUI(); // تحديث الواجهة
}

function updateCartUI() {
    let cartItems = JSON.parse(localStorage.getItem('myCart')) || [];
    let contentDiv = document.getElementById('cart-content');
    contentDiv.innerHTML = ""; // تنظيف المكان

    cartItems.forEach((item, index) => {
        contentDiv.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                <span>${item}</span>
                <button onclick="removeItem(${index})" style="background:red; color:white; border:none; border-radius:3px; cursor:pointer;">X</button>
            </div>
        `;
    });
}

let index = 0;
function moveSlide(step) {
    const slider = document.getElementById('slider');
    const items = slider.children;
    index += step;
    
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    
    slider.style.transform = `translateX(-${index * 100}%)`;
}