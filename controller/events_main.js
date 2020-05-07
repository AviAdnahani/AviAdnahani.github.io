import {getElementHeight} from './functions_global.js';
import { ID } from '../model/000_consts.js'

function getHeaderHeight() {
    var id = ID.HEADER;
    var H = document.getElementById(id);
    if (H) {
        return getElementHeight(H);
    }
    console.error(`cannot get the element ${id}`);
    return null;
}

function getFooterHeight () {
    var id = ID.FOOTER;
    var F = document.getElementById(id);
    if (F) {
        return getElementHeight(F);
    }
    console.error(`cannot get the element ${id}`);
    return null;
}

export {
    getHeaderHeight,
    getFooterHeight,
}