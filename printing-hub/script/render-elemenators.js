import { elemenators } from "../data/elemenators.js";

export function renderElemenator(){

    let html = "";
    for(const ele of elemenators){
        html += `
            <div class="elemenator-item">
                <img class="elemenator-img" src="./src/elemenators/${ele.imageUrl}" alt="" srcset="">
                <div class="elemenator-title">${ele.title}</div>
                <div class="elemenator-description">${ele.desc}</div>
            </div>
        `
    }
        
    const elemenatorContainer = document.querySelector(".elemenator-section");
    elemenatorContainer.innerHTML = html;
}