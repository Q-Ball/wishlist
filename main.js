import { GOOGLE_SHEET_URL } from './Utilities/Config.js';
import GSheet from './Utilities/GSheet.js';
import Cards from './Components/Cards.js';
import Loader from './Components/Loader.js';

const content = new Cards();
const loader = new Loader();

new GSheet(GOOGLE_SHEET_URL, (items) => {
	items.forEach((el) => { content.addCard(el); });
	content.show();
	loader.hide();
});