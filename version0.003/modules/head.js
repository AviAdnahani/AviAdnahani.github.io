import { setTag } from './global.js';

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
    href: "version0.002/style/header_footer_style.css"
}

const STYLESHEET_FONT = {
    tag: 'link', 
    perent_tag: 'head',
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Comfortaa&display=swap", 
}

const HEDER_TAGS = [VIEWPORT, STYLESHEET_LINK, STYLESHEET_FONT];


function setHead() {
    /*set head elements using dictionary from consts.js*/
    document.title = WEBSIT_NAME;
    for (const val of HEDER_TAGS) {
        setTag(val);
    }
};

export { setHead };