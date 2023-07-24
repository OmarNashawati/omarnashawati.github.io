const products = [
    {
        "id":1,
        "name":"Siyah Erkek Tişört",
        "discreption":"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
        "price":120.56,
        "imgURL": [
            "3dy15902000107-0-1645913125.jpg",
            "3dy15902000107-4-1645913106.jpg",
            "3dy15902000107-5-1645913103.jpg",
        ],
        "tags":['t-shirt','cok_satanlar','ust_giyim'],
    },
    {
        "id":2,
        "name":"Gri Erkek Tişört",
        "discreption":"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
        "price":300.99,
        "imgURL":[
            "3dy159020001135-0.jpg",
            "200456153-3-1658491401.jpg",
            "200456153-5-1658491401.jpg",
        ],
        "tags":['t-shirt','cok_satanlar','ust_giyim'],
    },
    {
        "id":3,
        "name":"Lacivert Erkek Tişört",
        "discreption":"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
        "price":230.99,
        "imgURL":[
            "3dy159020001150-0-1645911659.jpg",
            "3dy159020001150-3-1645911650.jpg",
            "3dy159020001150-5-1645911645.jpg",
        ],
        "tags":['t-shirt','cok_satanlar','ust_giyim'],
    },
    {
        "id":4,
        "name":"açık Gri Erkek Tişört",
        "discreption":"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir.",
        "price":99.99,
        "imgURL":[
            "200937894-1-1688974657.jpg",
            "200937894-3-1688974661.jpg",
            "200937894-5-1688974660.jpg",
        ],
        "tags":['t-shirt','cok_satanlar','ust_giyim'],
    },
]



const fav_item_count = document.getElementById("fav_item_count")
const favItemsCount = JSON.parse(localStorage.getItem('fav_items_list'))?.length
fav_item_count.innerText = favItemsCount === undefined ? 0 : favItemsCount






const new_products_div = document.getElementById('new_products_div')
const cards = products.map(p => (
    `
    <a class="product_card" href="product.html?id=${p.id}">
        <img class="card_img" src="../products_Media/${p.imgURL[0]}" alt="">
        <div class="card_body">
            <p class="card_title">${p.name}</p>
            <p class="card_price">${p.price}₺</p>
        </div>
    </a>
    `
)).join("") 


new_products_div.innerHTML = cards