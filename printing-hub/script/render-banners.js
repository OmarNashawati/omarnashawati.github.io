const bannersUrl = ["banner_01.png","banner_02.png","banner_03.png"];
export function renderBanners(){
    
    let index = 0;
    setHtml(index)
    setInterval(function(){

        if(index === bannersUrl.length){
            index = 0 ;
        }

        setHtml(index)
        
        index++;
    },30*1000);
}

function setHtml(index){
    const url = bannersUrl[index]
    const bannerSection = document.querySelector('.hero-banner-section');

    bannerSection.innerHTML = `
        <img src="/src/banners/${url}" alt="">
        <div class="slider-controller-container">
            ${renderSliderControlPoints(index)}
        </div>
    `;

    document.querySelectorAll('.slider-point').forEach(point => {
        point.addEventListener('click',()=>{
           setHtml(point.id);
            
        })
    })
}


function renderSliderControlPoints(activeSliderIndex){
    let pointrHtml = '';
    for(let [index,point] of bannersUrl.entries()){
        
       pointrHtml += `
            <div id="${index}" class="slider-point ${index===activeSliderIndex?"active-slider":""} "></div>
       ` ;
    }
    return pointrHtml;
}



