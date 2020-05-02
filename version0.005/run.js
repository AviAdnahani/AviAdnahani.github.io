import { 
    elementCreator 
} from './controller/global.js';

import { 
    STYLESHEET_FONT_META, 
    VIEWPORT_META 
} from './modules/000_head.js';

import { 
    HEADER_META, 
    LOGO_IMAGE_META, 
    HEADER_BOTTOM_META,
    HEADER_BOTTOM_ELEMENT_TEMPLATE,
    HEADER_BOTTOM_ELEMENT_METADATA
} from './modules/011_header.js';

import {
    setBodyStyle,
} from './controller/main_window.js'

elementCreator(STYLESHEET_FONT_META);
elementCreator(HEADER_META);
elementCreator(LOGO_IMAGE_META);
elementCreator(HEADER_BOTTOM_META);
// elementCreator(HEADER_BOTTOM_ELEMENT_TEMPLATE);
// elementCreator(HEADER_BOTTOM_ELEMENT_METADATA);
setBodyStyle();




// elementCreator header
// elementCreator header logo
// elementCreator header bottom
// elementCreator main
// elementCreator footer
// elementCreator footer icons

function loadMain(){
    return this;
}