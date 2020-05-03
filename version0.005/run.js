import { 
    // elementCreator,
    elementCreator_class 
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
    FOOTER_META,
    FOOTER_A_METADATA,
    FOOTER_A_TEMPLATE,
    FOOTER_IMG_METADATA,
    FOOTER_IMG_TEMPLATE,
} from './modules/031_footer.js';

import {
    setBodyStyle,
    loadMain,
} from './controller/main_window.js';

if(!new elementCreator_class(STYLESHEET_FONT_META).creatElementP()) console.error('can not create: STYLESHEET_FONT_META');
if(!new elementCreator_class(VIEWPORT_META).creatElementP()) console.error('can not create: VIEWPORT_META');
if(!new elementCreator_class(FOOTER_META).creatElementP()) console.log('can not create: FOOTER_META');
if(!new elementCreator_class(FOOTER_A_TEMPLATE, FOOTER_A_METADATA).creatElementP()) console.log('can not create: FOOTER_A_METADATA');
if(!new elementCreator_class(FOOTER_IMG_TEMPLATE, FOOTER_IMG_METADATA).creatElementP()) console.log('can not create: FOOTER_IMG_METADATA');
if(!new elementCreator_class(HEADER_META).creatElementP()) console.error('can not create: HEADER_META');
if(!new elementCreator_class(LOGO_IMAGE_META).creatElementP()) console.error('can not create: LOGO_IMAGE_META');
if(!new elementCreator_class(HEADER_BOTTOM_META).creatElementP()) console.error('can not create: HEADER_BOTTOM_META');
if(!new elementCreator_class(HEADER_BOTTOM_ELEMENT_TEMPLATE, HEADER_BOTTOM_ELEMENT_METADATA).creatElementP()) console.log('can not create: HEADER_BOTTOM_ELEMENT_METADATA');

setBodyStyle(); // working

// Done - elementCreator header
// Done - elementCreator header logo
// Done - elementCreator header bottom
// Done - elementCreator header bottom divs ** NO EVENTS
// elementCreator main
// elementCreator footer
// elementCreator footer icons

