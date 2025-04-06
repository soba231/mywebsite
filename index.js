var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1581955957646-b5a446b6100a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gun Pistols',
    price: 25700,
    description: 'Gun Pistols Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem harum amet beatae assumenda ratione!',
    type: 'pistols'
},{
    id: 2,
    img:'https://images.unsplash.com/photo-1627817227571-91d46ce1194e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gun Sniper Rifless',
    price: 586000,
    description: 'Gun Sniper Rifless Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem harum amet beatae assumenda ratione!',
    type: 'sniper'
},{ 
    id: 3,
    img:'https://images.unsplash.com/photo-1585589266882-2cb137ba7db6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1627817227571-91d46ce1194e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gun Assault Rifles',
    price: 186000,
    description: 'Gun Assault Rifles Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem harum amet beatae assumenda ratione!',
    type: 'rifles'
},{
    id: 4,
    img: 'https://images.unsplash.com/photo-1587205419020-1ff788f8ca54?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1581955957646-b5a446b6100a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gun Pistols',
    price: 45700,
    description: 'Gun Pistols Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem harum amet beatae assumenda ratione!',
    type: 'pistols'
},{
    id: 5,
    img: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gun Pistols',
    price: 31700,
    description: 'Gun Pistols Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem harum amet beatae assumenda ratione!',
    type: 'pistols'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } บาท</p>
                </div>`;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function search(elem) {
    //console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length;  i++) {
         if(product[i].name.includes(value)) {
                html += ` <div onclick="openProductDetail(${i})" class="product-item ${product[i].type}">
                <img class="product-img" src="${product[i].img}" alt="">
                <p style="font-size: 1.2vw;">${product[i].name}</p>
                <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } บาท</p>
             </div>`;
        }
    }
    $("#productlist").html(html);
}

function searchproduct(param) {
    console.log(param)
    $(".product-item").css('display','none')
    if(param == 'all') {
        $(".product-item").css('display','block')
    }
    else {
        $("."+param).css('display','block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display','flex')
    $("#mdd-img").attr('src',product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text(numberWithComma(product[index].price) + ' บาท')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if(productindex == cart[i].index){
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
       // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    swal.fire({
        icon: 'success',
        title: 'เพิ่ม' + product[productindex].name + 'ไปยังรถเข็นของคุณแล้ว'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    redercart();
}

function redercart() {
    if(cart.length > 0){
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += ` <div class="cartlist-item">
                        <div class="cartlist-left">
                        <img src="${cart[i].img}" alt="">
                        <div class="cartlist-detail">
                            <p style="font-size: 1.3vw;">${cart[i].name}</p>
                            <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } บาท</p>
                        </div>
                        </div>
                        <div class="cartliist-right">
                        <p onclick="deinitem('-',${i})" class="btnc">-</p>
                        <p id="countitems${i}" style="margin: 0 7px;">${cart[i].count}</p>
                        <p onclick="deinitem('+',${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>ยังไม่มีสินค้าในรถเข็นของคุณ</p>`)
    }
}

function deinitem(action,index){
    if(action == '-'){
        if(cart[index].count > 0){
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                swal.fire({
                    icon: 'waening',
                    title: 'คุณต้องการลบสินค้าชิ้นนี้ใช่ไหม',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelmButtonText: 'Cancel'
                }).then((res) => {
                    if(res.isConfirmed) {
                        cart.splice(index,1)
                        console.log(cart)
                        redercart();
                        $("#cartcount").css('display','flex').text(cart.length)

                        if(cart.length <= 0) {
                            $("#cartcount").css('display','none')
                        }
                    }
                    else{
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count)
                    }
                })
            }
        }
    }
    else if(action == '+'){
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
    }

    }
