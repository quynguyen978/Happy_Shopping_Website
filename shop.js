let list = document.querySelectorAll('.grid__colume-2-4 .home-product-item')
// let array_list = Array.from(list)
console.log(list)
var count_item = 0;
list.forEach(item => {
    item.addEventListener('click', function(event) {
        count_item++;
        if(event.target.classList.contains('home-product-item__img')) {
            // document.querySelector('.header__cart-list-item .header__cart-item').appendChild()
            document.querySelector('.header__cart-notice').innerText= `${count_item}`
          
        }
    })
})


function signOut() {
    let userName = document.querySelector('.header__navbar-user-item--separate a').innerText
    // console.log({ELEMENT: userName})
    userName.onclick = function () {
        if(userName.textContent === 'Logout') {
            console.log('log out')
        }
    }
}

signOut();
