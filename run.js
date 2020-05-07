import { runElementCreator } from './controller/functions_global.js';
import { SECTION_HEAD_DATA } from './view/view_head.js';
import { SECTION_HEADER_DATA } from './view/view_header.js';
import { SECTION_FOOTER_DATA } from './view/view_footer.js';
import { setBodyStyle } from './controller/events_load.js';
import { SECTION_MAIN_DATA } from  './view/view_main.js';

// create head
runElementCreator(SECTION_HEAD_DATA);

// create footer
runElementCreator(SECTION_FOOTER_DATA);

// create main
runElementCreator(SECTION_MAIN_DATA);

// create header
runElementCreator(SECTION_HEADER_DATA);

setBodyStyle(); // set body style