const buyBtn = document.querySelectorAll('.buyBtn');
const parent = document.querySelector('.books_container');
const cart = document.querySelector('.numOfBooks');

function inCart() {
    parent.addEventListener('click', (e) => {
        const targetBtn = e.target;
        if(targetBtn.closest('.buyBtn')) {
            push(targetBtn);
            cartCount(targetBtn);
            cart.style.opacity = '1'
            targetBtn.style.opacity = '1'
        }
    })

}

function push(targetBtn) {
    if (targetBtn.classList.contains('InCartBtn')) {
        targetBtn.innerHTML = 'buy now'
        let prdCount = localStorage.getItem('count');
        prdCount = parseInt(prdCount)
        if (prdCount) {
            localStorage.setItem('count', prdCount - 2)
            cart.innerHTML = prdCount
        } else {
            localStorage.setItem('count', 0)
            cart.innerHTML = prdCount = 0
        }
    } else {
        targetBtn.innerHTML = 'in the cart'
    }
    targetBtn.classList.toggle('InCartBtn')
}

function cartCount(targetBtn) {
    if (targetBtn.classList.contains('buyBtn')) {
    let prdCount = localStorage.getItem('count');
    prdCount = parseInt(prdCount)
    if (prdCount) {
        localStorage.setItem('count', prdCount + 1)
        cart.innerHTML = prdCount + 1
    } else {
        localStorage.setItem('count', 1)
        cart.innerHTML = prdCount = 1
    }
}
}

function displayCart() {
    let prdCount = localStorage.getItem('count');
    if (prdCount) {
        cart.style.opacity = '1'
        cart.innerHTML = prdCount;
    }
}

export {inCart, push, cartCount, displayCart}