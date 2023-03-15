//================== Delete to Carts ================
let carts = JSON.parse(localStorage.getItem('carts'))
let cartsList = document.querySelector('.carts')
cartsList.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        let i = e.srcElement.value
        carts.splice(i,1)
        console.log(carts)
        let cartsJson = JSON.stringify(carts)
        localStorage.setItem('carts', cartsJson)
    }
    loadCarts()
})
// ====================================

function loadCarts(){
    let arr = JSON.parse(localStorage.getItem('carts'))
    let items = document.querySelector('.carts')
    console.log(arr)
    let html = "";  
    let index = 0;
    for(i of arr){
        html +=
        `
            <div class="row">
                    <div class="item" style="display: flex; margin-left:30px;">
                        <div class="product-view">
                            <img style="width: 250px; height:250px" src="${i.img}" alt="">
                        </div>
                        <div class="content" style="margin-left:30px; margin-bottom:20px">
                            <h3>${i.name}</h3>
                            <p>${i.des}</p>
                            <button class="btn btn-danger" value = ${index}>Xóa khỏi giỏ hàng</button>
                        </div>
                    </div>
                </div>
        `         
        index++;
    }
    console.log(html)
    items.innerHTML = html
}

loadCarts() 