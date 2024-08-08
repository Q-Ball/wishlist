class Cards {
	constructor() {
		this.block = document.getElementById('cards');
		this.hide();
	}
	addCard(data) {
		let wrapper = document.createElement('li');
			wrapper.className = 'card-wrapper';
		let card = document.createElement('div');
			card.className = 'card';
			card.style.backgroundImage = `url(${data.img})`;
			card.addEventListener('click', () => { window.open(data.url, '_blank').focus(); });
		let content = document.createElement('div');
			content.className = 'content';
		let column = document.createElement('div');
			column.className = 'column';
		let arrow = document.createElement('div');
			arrow.className = 'arrow';
		let title = document.createElement('div');
			title.className = 'title';
			title.innerText = data.name;
		let price = document.createElement('div');
			price.className = 'price';
		let priceValue = document.createElement('div');
			priceValue.className = 'value';
			priceValue.innerHTML = `€${data.price}`;
		let priceIcon = document.createElement('div');
		let iconColour = 'low';
		let priceInt = parseInt(data.price);
		if (priceInt >= 50) iconColour = 'medium';
		if (priceInt >= 80) iconColour = 'high';
		if (priceInt >= 100) iconColour = 'veryhigh';
		priceIcon.className = `icon ${iconColour}`;
		price.appendChild(priceValue);
		price.appendChild(priceIcon);
		column.appendChild(title);
		column.appendChild(price);
		content.appendChild(column);
		content.appendChild(arrow);
		card.appendChild(content);
		wrapper.appendChild(card);
		this.block.appendChild(wrapper);
	}
	hide() {
		this.block.classList.remove('show');
	}
	show() {
		this.block.classList.add('show');
	}
}

export default Cards;