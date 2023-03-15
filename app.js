let products =[
    {name: "Đường Cong Hạnh Phúc",
     img: "./Hình ảnh/duong_cong_hp.jpg",
     des: "Giá: 125.000đ"
    },
    {
     name: "Alain Nói Về Hạnh Phúc",
     img:"./Hình ảnh/alane-noi-ve-hanh-phuc.jpg",
     des: "Giá: 120.000đ"
    },   
    {name: "Hạnh Phúc Không Đắt Như Bạn Nghĩ",
    img: "./Hình ảnh/img476_6.jpg",
    des: "Giá: 100.000đ"
   },
   {
    name: "Mình Nói Gì Khi Nói Về Hạnh Phúc",
    img:"./Hình ảnh/39083808.jpg",
    des: "Giá: 70.000đ"
   }, 

   {name: "Người Thông Minh Làm Thế Nào Để Hạnh Phúc",
     img: "./Hình ảnh/tải xuống.jpg",
     des: "Giá: 40.000đ"
    },
    {
     name: "Hạnh Phúc Từ Những Điều Bé Nhỏ",
     img:"./Hình ảnh/sach-hanh-phuc-tu-nhung-dieu-be-nho.jpg",
     des: "Giá: 130.000đ"
    },   
    {name: "Tình Cờ Gặp Hạnh Phúc",
    img: "./Hình ảnh/tải xuống.png",
    des: "Giá: 100.000đ"
   },
   {
    name: "Hạnh Phúc Là Không Chờ Đợi",
    img:"./Hình ảnh/2020_05_11_16_37_17_1-390x510.jpg",
    des: "Giá: 90.000đ"
   }, 

   {name: "Hay Là Hạnh Phúc Trừ Mình Ra ",
     img: "./Hình ảnh/3f489c1a4f7589e66c05d43f69891ad8.jpg",
     des: "Giá: 90.000đ"
    },
    {
     name: "Hạnh Phúc Tại Tâm",
     img:"./Hình ảnh/hanh-phuc-tai-tam1.jpg",
     des: "Giá: 90.000đ"
    },   
    {name: "Hạnh Phúc Là Gì?",
    img: "./Hình ảnh/images.jpg",
    des: "Giá: 80.000đ"
   },
   {
    name: "7 Thói Quen Tạo Gia Đình Hạnh Phúc",
    img:"./Hình ảnh/tải xuống (2).jpg",
    des: "Giá: 150.000đ"
   }, 

   {name: "Sống Để Hạnh Phúc",
     img: "./Hình ảnh/song-de-hanh-phuc_outline_11-1-2017-01.u547.d20170209.t114757.678399.jpg",
     des: "Giá: 80.000đ"
    },
    {
     name: "Đàn Ông Sao Hỏa Đàn Bà Sao Kim",
     img:"./Hình ảnh/bc10734989977da424642a1c4750eee2.jpg",
     des: "Giá: 140.000đ"
    },   
    {name: "Cảm Ơn Vì Đã Cạnh Bên",
    img: "./Hình ảnh/nxbtre_full_01382022_093803.jpg",
    des: "Giá: 90.000đ"
   },
   {
    name: "Chúng Ta Sống Có Vui Không",
    img:"./Hình ảnh/1594a599622f41b1e5119e20e644fedd.jpg",
    des: "Giá: 70.000đ"
   }, 
]
//============Search=====================
let btn = document.getElementById('btn')
btn.onclick = function (){
    let value = document.getElementById('search').value
    let arr = []
    for(i of products){
        if(i.name.indexOf(value) >= 0){
            arr.push(i);
        }
    }
    load(arr)
}
//====================================================

// ================= khoi tao du lieu ============= B1 mở lên
// let carts = []
// let cartsJson = JSON.stringify(carts)
// localStorage.setItem('carts',cartsJson)

// let productJson = JSON.stringify(products)
// localStorage.setItem('products',productJson)

// let p = localStorage.getItem('products');

// console.log(JSON.parse(p))

//================== Add to Carts ================ B2 
let carts = JSON.parse(localStorage.getItem('carts'))
let items = document.querySelector('.items')
items.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        let i = e.srcElement.value
        carts.push(products[i])
        console.log(carts)
        let cartsJson = JSON.stringify(carts)
        localStorage.setItem('carts', cartsJson)
    }
    //loadCarts()
    location.replace('carts.html')

})
// ====================================

//====================load============
function load(arr){
    let items = document.querySelector('.items')
    let html = "";
    let count = 1;
    let index = 0;
    for(i of arr){
        if(count == 1){
            html += `<div class="row" style="margin-top: 10px;">`  
        }
        // <p>${i.des}</p>
        html += 
        `
            <div class="col-3">
                    <div class="item">
                        <div class="product-view">
                            <img style="width: 250px;" src="${i.img}" alt="">
                        </div>
                        <div class="content">
                            <h3>${i.name}</h3>
                            <p>${i.des}</p>
                            <button style="border-radius: 10px;" value = ${index}>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
        ` 
        if(count == 4){
            html +=`</div>`
            count = 0;
        }
        count++;
        index++;
    }
    items.innerHTML = html
}


load(products)
