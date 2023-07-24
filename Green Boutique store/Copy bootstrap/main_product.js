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
    },
]

const params = window.location.search
const productID = new URLSearchParams(params).get('id')

const selected_product = products.find(p => p.id == productID)
console.log(selected_product);



const main = `
    <div id="product_details">

        <div id="gallery">
            <div id="small_imgs_div">
                <img class="small_img" src="../products_Media/${selected_product.imgURL[1]}" alt="">
                <img class="small_img" src="../products_Media/${selected_product.imgURL[2]}" alt="">
            </div>
            <img id="main_img" src="../products_Media/${selected_product.imgURL[0]}" alt="">
        </div>

        <div id="details">
            <div id="product_details_header_div">
                <h2>${selected_product.name}</h2>
                <p>ürün kodu : ${selected_product.id}</p>
                <h2>${selected_product.price} ₺</h2>
            </div>

            <div id="sizes_div">
                <h2>beden</h2>
                <div id="sizes_options_div">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
    
            <div id="colors_div">
                <h2>Renkler</h2>
                <div id="colors_options_div">
                    <img src="../products_Media/3dy15902000107-0-1645913125.jpg" alt="" srcset="">
                    <img src="../products_Media/3dy159020001150-0-1645911659.jpg" alt="" srcset="">
                    <img src="../products_Media/3dy159020001135-0.jpg" alt="" srcset="">
                </div>
            </div>
    
            <div id="but_div">
                <div id="add_to_card_but">Sepete ekle</div>
                <div id="add_to_fav_but"><i class="fa-regular fa-heart"></i></div>
            </div>
        </div>
    </div>

        
    <div id="product_features">
        <h2>Ürün Özellikleri</h2>
        <div id="features">

            ${
                Object.keys(selected_product.features).map(f => {
                    return(
                        `
                            <p>${f}</p>
                            <p>${selected_product.features[f]}</p>
                        `
                    )
                }).join('')
            }
          
        </div>
    </div>    
`

const main_div = document.getElementById('main_div')

main_div.innerHTML = main