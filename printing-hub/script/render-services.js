import {sercices} from '../data/services.js';

export function renderServices(){

    let html = "";
    for(const service of sercices ){
        html += `

        <a href="../pages/${service.href}" class="popular-servise-item" style=" background-image: url('./src/services/${service.imageUrl}');">
            <div class="text">${service.title}</div>
            <div class="cover"></div>
        </a>
        
        `
    }

    const servicesContainer = document.querySelector('.services-countainer');
    servicesContainer.innerHTML = html;
}