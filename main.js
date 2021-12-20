import {items} from './data.js';

let content = document.getElementById("content");
content.innerHTML = '';

// var items = {};
// let ajax = new XMLHttpRequest()
// ajax.open('GET','./data.php');
// ajax.send();
// ajax.onload = function() {
//     items = JSON.parse(ajax.response);
    items.forEach(function addItems(item){
        console.log(item);
        let priceClass = 'price_low';
        let priceInt = parseInt(item.price);
        if (priceInt >= 2000) {priceClass = 'price_medium';}
        if (priceInt >= 5000) {priceClass = 'price_high';}
        content.innerHTML += 
        `<div class="figure">
            <a href="${item.link}" target="blank">
                <img class="${priceClass}" src="${item.image_link}">
                <div class="caption">
                    <h2>${item.title}</h2>
                    <div class="price">${item.price} ₽</div>
                    <div class="description">${item.description}</div>
                </div>
                <div class="status ${priceClass}"></div>
            </a>
        </div>`;
     });
// }

