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
        "features":{
            "renk":"siyah",
            "mevsim":"yazlık",
            "kumaş":"100% pamuk",
            "boy":"70cm",
            "kol":"kısa kol",
            "yaka":"V yaka",
        },
        "tags":['t-shirt','cok_satanlar','ust_giyim','yeni'],
        "colors":[1,2,3,4],
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
        "features":{
            "renk":"Gri",
            "mevsim":"yazlık",
            "kumaş":"100% pamuk",
            "boy":"70cm",
            "kol":"kısa kol",
            "yaka":"V yaka",
        },
        "tags":['t-shirt','cok_satanlar','ust_giyim'],
        "colors":[1,2,3,4],
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
        "features":{
            "renk":"Lacivert",
            "mevsim":"yazlık",
            "kumaş":"100% pamuk",
            "boy":"70cm",
            "kol":"kısa kol",
            "yaka":"V yaka",
        },
        "tags":['t-shirt','cok_satanlar','ust_giyim','yeni'],
        "colors":[1,2,3,4],
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
        "features":{
            "renk":"açık Gri",
            "mevsim":"yazlık",
            "kumaş türü":"100% pamuk",
            "boy":"70cm",
            "kol":"kısa kol",
            "yaka":"V yaka",
        },
        "tags":['t-shirt','cok_satanlar','ust_giyim'],
        "colors":[1,2,3,4],
    },
    {
        "id":5,
        "name":"El Yapımı Hakiki Deri Cüzdan - Castle",
        "discreption":"ÜRÜN 11 CM X 8.5 CM BOYUTUNDADIR BOYUTLARINI DİKKATE ALARAK SİPARİŞ VERİNİZ. HAKİKİ DERİLERDE ZAMANLA ESNEME PAYI VARDIR İLK 1 HAFTALIK KULLANIMIZDA KARTLIK BÖLMELERİNİN ESNEMESİNİ GÖZ ÖNÜNDE BULUNDURUNUZ. ",
        "price":223.99,
        "imgURL":[
            "110000337229424.jpg",
            "110000336882778.jpg",
            "110000336882775.jpg",
        ],
        "features":{
            "renk":"Kahverengi",
            "dikiş":"el yapımı",
            "kumaş türü":"Deri",
            "boy":"11 CM X 8.5 CM",
            "kart yuvasi":"6 adet kart"
        },
        "tags":['cok_satanlar','aksesuar','yeni'],
        "colors":[5],
    },
    {
        "id":6,
        "name":"Luxuitems Unisex Örgü Model Şapka",
        "discreption":" Unisex Örgü Model Beyzbol Şapkası. ",
        "price":23.99,
        "imgURL":[
            "110000188504151.jpg",
            "110000188504152.jpg",
        ],
        "features":{
            "renk":"Koyu Gri",
            "mevsim":"İlkbahar,Sonbahar,Yaz,Kış",
            "Tarz": "Beyzbol Şapkası",
            "kumaş türü":"100% pamuk",
            "Cinsiyet" : "Erkek/Kadın",
            "Kapak Çevresi": "yaklaşık 55--60cm",
        },
        "tags":['cok_satanlar','aksesuar'],
        "colors":[6,7],
    },
    {
        "id":7,
        "name":"Luxuitems Unisex Örgü Model Şapka",
        "discreption":" Unisex Örgü Model Beyzbol Şapkası. ",
        "price":23.99,
        "imgURL":[
            "110000188503946.jpg",
            "110000188503949.jpg",
            "110000188504150.jpg",
        ],
        "features":{
            "renk":" Siyah ",
            "mevsim":"İlkbahar,Sonbahar,Yaz,Kış",
            "Tarz": "Beyzbol Şapkası",
            "kumaş türü":"100% pamuk",
            "Cinsiyet" : "Erkek/Kadın",
            "Kapak Çevresi": "yaklaşık 55--60cm",
        },
        "tags":['cok_satanlar','aksesuar','yeni'],
        "colors":[6,7],
    },
]


const fav_item_count = document.getElementById("fav_item_count")
const favItemsCount = JSON.parse(localStorage.getItem('fav_items_list'))?.length
fav_item_count.innerText = favItemsCount === undefined ? 0 : favItemsCount






const new_products_div = document.getElementById('new_products_div')
const cards = products.map(p => {
    if(p.tags.includes('yeni')){
        return( `
        <a class="product_card" href="product.html?id=${p.id}">
            <img class="card_img" src="../products_Media/${p.imgURL[0]}" alt="">
            <div class="card_body">
                <p class="card_title">${p.name}</p>
                <p class="card_price">${p.price}₺</p>
            </div>
        </a>
        `)
    }
}).join("") 


new_products_div.innerHTML = cards