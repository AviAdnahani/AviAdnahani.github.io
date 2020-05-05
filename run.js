import { 
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
    HEADER_BOTTOM_INTRODUCTION,
    HEADER_BOTTOM_EXPERIENCE,
    HEADER_BOTTOM_EDUCATION,
    HEADER_BOTTOM_PROJECTS,
    HEADER_BOTTOM_CONTACT,
} from './modules/011_header.js';

import {
    FOOTER_META,
    FOOTER_A_WHATSAPP,
    FOOTER_A_EMAIL,
    FOOTER_A_LINKDIN,
    FOOTER_A_GITHUB,
    FOOTER_A_LOCATION,
    FOOTER_IMG_WHATSAPP,
    FOOTER_IMG_EMAIL,
    FOOTER_IMG_LINKDIN,
    FOOTER_IMG_GITHUB,
    FOOTER_IMG_LOCATION,
} from './modules/031_footer.js';

import {
    setBodyStyle,
    loadMain,
} from './controller/main_window.js';

import {
    MAIN_MATA,
} from  './modules/021_main.js';

// create head
if(!new elementCreator_class(STYLESHEET_FONT_META).creatElementP()) console.error('can not create: STYLESHEET_FONT_META');
if(!new elementCreator_class(VIEWPORT_META).creatElementP()) console.error('can not create: VIEWPORT_META');

// create footer
if(!new elementCreator_class(FOOTER_META).creatElementP()) console.log('can not create: FOOTER_META');

// create footer anchore
if(!new elementCreator_class(FOOTER_A_WHATSAPP).creatElementP()) console.log('can not create: FOOTER_A_WHATSAPP');
if(!new elementCreator_class(FOOTER_A_EMAIL).creatElementP()) console.log('can not create: FOOTER_A_EMAIL');
if(!new elementCreator_class(FOOTER_A_LINKDIN).creatElementP()) console.log('can not create: FOOTER_A_LINKDIN');
if(!new elementCreator_class(FOOTER_A_GITHUB).creatElementP()) console.log('can not create: FOOTER_A_GITHUB');
if(!new elementCreator_class(FOOTER_A_LOCATION).creatElementP()) console.log('can not create: FOOTER_A_LOCATION');

// create footer img
if(!new elementCreator_class(FOOTER_IMG_WHATSAPP).creatElementP()) console.log('can not create: FOOTER_IMG_WHATSAPP');
if(!new elementCreator_class(FOOTER_IMG_EMAIL).creatElementP()) console.log('can not create: FOOTER_IMG_EMAIL');
if(!new elementCreator_class(FOOTER_IMG_LINKDIN).creatElementP()) console.log('can not create: FOOTER_IMG_LINKDIN');
if(!new elementCreator_class(FOOTER_IMG_GITHUB).creatElementP()) console.log('can not create: FOOTER_IMG_GITHUB');
if(!new elementCreator_class(FOOTER_IMG_LOCATION).creatElementP()) console.log('can not create: FOOTER_IMG_LOCATION');

// create hader
if(!new elementCreator_class(HEADER_META).creatElementP()) console.error('can not create: HEADER_META');
if(!new elementCreator_class(LOGO_IMAGE_META).creatElementP()) console.error('can not create: LOGO_IMAGE_META');
if(!new elementCreator_class(HEADER_BOTTOM_META).creatElementP()) console.error('can not create: HEADER_BOTTOM_META');
if(!new elementCreator_class(HEADER_BOTTOM_INTRODUCTION).creatElementP()) console.log('can not create: HEADER_BOTTOM_INTRODUCTION');
if(!new elementCreator_class(HEADER_BOTTOM_EXPERIENCE).creatElementP()) console.log('can not create: HEADER_BOTTOM_EXPERIENCE');
if(!new elementCreator_class(HEADER_BOTTOM_EDUCATION).creatElementP()) console.log('can not create: HEADER_BOTTOM_EDUCATION');
if(!new elementCreator_class(HEADER_BOTTOM_PROJECTS).creatElementP()) console.log('can not create: HEADER_BOTTOM_PROJECTS');
if(!new elementCreator_class(HEADER_BOTTOM_CONTACT).creatElementP()) console.log('can not create: HEADER_BOTTOM_CONTACT');


// MAIN_MATA
if(!new elementCreator_class(MAIN_MATA).creatElementP()) console.log('can not create: MAIN_MATA');

setBodyStyle(); // working

// Done - elementCreator header
// Done - elementCreator header logo
// Done - elementCreator header bottom
// Done - elementCreator header bottom divs ** NO EVENTS
// elementCreator main
// Done - elementCreator footer
// Done - elementCreator footer icons

