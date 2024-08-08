class Loader {
	constructor() {
		this.block = document.getElementById('loader');
		this.show();
	}
	hide() {
		this.block.classList.remove('show');
	}
	show() {
		this.block.classList.add('show');
	}
}

export default Loader;