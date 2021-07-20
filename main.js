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
        if (priceInt >= 1000) {priceClass = 'price_medium';}
        if (priceInt >= 3000) {priceClass = 'price_high';}
        content.innerHTML += 
        `<div class="grid">
            <div class="figure">
                <!-- <a href="${item.link}">TEST</a> -->
                <img class="${priceClass}" src="${item.image_link}">
                <div class="figcaption">
                    <h2>${item.title}</h2>
                    <div class="price">${item.price} ₽</div>
                    <div class="description">Lily likes to play with crayons and pencils</div>
                </div>
                <div class="figstatus ${priceClass}"></div>
            </div>
        </div>`;
     });
// }

