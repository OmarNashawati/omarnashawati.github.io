import {reviews} from '../data/reviews.js';


export function renderReviews(){
    let html = "";
    for(const review of reviews){
        html +=`
        <div class="review-item">
            <div class="review-head">
                <div class="user-image-container">
                    <img class="user-image" src="./src/${review.userImage}"/>
                </div>
                <div>
                    <div class="rating-stars"><img src="/src/ratings/rating-${review.rating*10}.png" alt=""></div>
                    <div class="user-name">${review.userName}</div>
                </div>
            </div>
            <div class="review-body">${review.review}</div>
        </div>
        `
    }

    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML = html;
}

