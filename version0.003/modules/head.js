// import { setTag } from './global.js';
const TAG = 'tag';
const PERENT_TAG = 'perent_tag';
const WEBSIT_NAME = "Avi Adnahani";

const VIEWPORT = {
    tag: 'meta',
    perent_tag: 'head',
    name: "viewport", 
    content: "width=device-width, initial-scale=1.0"
}

const STYLESHEET_LINK = {
    tag: 'link', 
    perent_tag: 'head',
    rel: "stylesheet", 
    type: "text/css", 
    href: "style/style.css"
}

const STYLESHEET_FONT = {
    tag: 'link', 
    perent_tag: 'head',
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Comfortaa&display=swap", 
}

const HEDER_TAGS = [VIEWPORT, STYLESHEET_FONT];


function setHead() {
    /*set head elements using dictionary from consts.js*/
    document.title = WEBSIT_NAME;
    for (const val of HEDER_TAGS) {
        setTheHeadElements(val);
    }
};

function setTheHeadElements(sorce) {
    var tag = document.createElement(sorce[TAG]);
    for (const key in sorce) {
        if (key != TAG & key != PERENT_TAG) {
            tag.setAttribute(key, sorce[key]);
        }
    }
    document.getElementsByTagName(sorce[PERENT_TAG])[0].appendChild(tag);
}

export { setHead };