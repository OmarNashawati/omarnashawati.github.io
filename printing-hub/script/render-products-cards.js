import {printingProducts as products} from '../data/products.js'

export function renderProductsCards(){
    const main = document.querySelector('.printing-main');

    let html = `
        <div class="products-container">
           ${getProductsHtml()}
        </div>
    `

    main.innerHTML = html;
}

function getProductsHtml(){
    let html = "";

    for(let product of products){
        html += `
         <a href="../pages/product.html?id=${product.id}" class="product-item" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="../src/products/${product.imageUrl}" alt="" srcset="">
                </div>
                <div class="product-meta">
                    <div class="product-name">${product.title}</div>
                </div>
            </a>
        `
    }


    return html;
}