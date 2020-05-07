import { 
    elementCreator,
    windowEventCreator 
} from './controller/functions_global.js';

import { 
    STYLESHEET_FONT_META, 
    VIEWPORT_META 
} from './view/view_head.js';

import { 
    HEADER_META, 
    LOGO_IMAGE_META, 
    HEADER_BOTTOM_META,
    HEADER_BOTTOM_INTRODUCTION,
    HEADER_BOTTOM_EXPERIENCE,
    HEADER_BOTTOM_EDUCATION,
    HEADER_BOTTOM_PROJECTS,
    HEADER_BOTTOM_CONTACT,
} from './view/view_header.js';

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
} from './view/view_footer.js';

import {
    setBodyStyle,
    loadMain,
} from './controller/events_load.js';

import {
    MAIN_MATA,
} from  './view/view_main.js';

// todo:
// - write a class (elementSectionCreator) that gats a list of dict's and runs "elementCreator" calss on each dict.
// - let the sections head, header, main and footer export thier list of dict's.
// - run elementSectionCreator in this file (run.js), on each list exported from the sections above.

// create head
if(!new elementCreator(STYLESHEET_FONT_META).run()) console.error('can not create: STYLESHEET_FONT_META');
if(!new elementCreator(VIEWPORT_META).run()) console.error('can not create: VIEWPORT_META');

// create footer
if(!new elementCreator(FOOTER_META).run()) console.log('can not create: FOOTER_META');

// create footer anchore
if(!new elementCreator(FOOTER_A_WHATSAPP).run()) console.log('can not create: FOOTER_A_WHATSAPP');
if(!new elementCreator(FOOTER_A_EMAIL).run()) console.log('can not create: FOOTER_A_EMAIL');
if(!new elementCreator(FOOTER_A_LINKDIN).run()) console.log('can not create: FOOTER_A_LINKDIN');
if(!new elementCreator(FOOTER_A_GITHUB).run()) console.log('can not create: FOOTER_A_GITHUB');
if(!new elementCreator(FOOTER_A_LOCATION).run()) console.log('can not create: FOOTER_A_LOCATION');

// create footer img
if(!new elementCreator(FOOTER_IMG_WHATSAPP).run()) console.log('can not create: FOOTER_IMG_WHATSAPP');
if(!new elementCreator(FOOTER_IMG_EMAIL).run()) console.log('can not create: FOOTER_IMG_EMAIL');
if(!new elementCreator(FOOTER_IMG_LINKDIN).run()) console.log('can not create: FOOTER_IMG_LINKDIN');
if(!new elementCreator(FOOTER_IMG_GITHUB).run()) console.log('can not create: FOOTER_IMG_GITHUB');
if(!new elementCreator(FOOTER_IMG_LOCATION).run()) console.log('can not create: FOOTER_IMG_LOCATION');

// creat main
if(!new elementCreator(MAIN_MATA).run()) console.log('can not create: MAIN_MATA');
var e = new windowEventCreator(MAIN_MATA);
e.run();

// create header
if(!new elementCreator(HEADER_META).run()) console.error('can not create: HEADER_META');
if(!new elementCreator(LOGO_IMAGE_META).run()) console.error('can not create: LOGO_IMAGE_META');
if(!new elementCreator(HEADER_BOTTOM_META).run()) console.error('can not create: HEADER_BOTTOM_META');
if(!new elementCreator(HEADER_BOTTOM_INTRODUCTION).run()) console.log('can not create: HEADER_BOTTOM_INTRODUCTION');
if(!new elementCreator(HEADER_BOTTOM_EXPERIENCE).run()) console.log('can not create: HEADER_BOTTOM_EXPERIENCE');
if(!new elementCreator(HEADER_BOTTOM_EDUCATION).run()) console.log('can not create: HEADER_BOTTOM_EDUCATION');
if(!new elementCreator(HEADER_BOTTOM_PROJECTS).run()) console.log('can not create: HEADER_BOTTOM_PROJECTS');
if(!new elementCreator(HEADER_BOTTOM_CONTACT).run()) console.log('can not create: HEADER_BOTTOM_CONTACT');

setBodyStyle(); // working

// Done - elementCreator header
// Done - elementCreator header logo
// Done - elementCreator header bottom
// Done - elementCreator header bottom divs ** NO EVENTS
// elementCreator main
// Done - elementCreator footer
// Done - elementCreator footer icons