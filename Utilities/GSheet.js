class GSheet {
	constructor(url, callback) {
		this.url = url;
		this.callback = callback;
		this.loadData();
	}
	loadData() {
		new Promise((resolve, reject) => {
			fetch(this.url)
			.then(x => x.text())
			.then(y => resolve(y))
		}).then(csv => {
			let data = Papa.parse(csv, {header:true}).data;
			this.callback(data);
		})
	}
}

export default GSheet;