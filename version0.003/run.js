import { setHead } from './modules/head.js';
import { createHeader, addEvenListenToLinks, setHeaderElementsSize, addEvenListenToHeaderFontSize } from './modules/header.js';
import { createMain, addEvenListenToMainHight } from './modules/main.js';
import { addFooter } from './modules/footer.js';
import { style } from './modules/style.js'

setHead();
addFooter();
createMain();
createHeader();
setHeaderElementsSize();
addEvenListenToHeaderFontSize();
addEvenListenToLinks();
addEvenListenToMainHight();
style();