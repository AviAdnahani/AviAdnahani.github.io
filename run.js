import { ElementCreatorRunner } from './controller/functions/elment_creators.js';
import { setBodyStyle, loadstaticHtmltoMain } from './controller/events/events_load.js';
import { SECTION_HEAD_DATA } from './view/view_head.js';
import { SECTION_HEADER_DATA } from './view/view_header.js';
import { SECTION_FOOTER_DATA } from './view/view_footer.js';
import { SECTION_MAIN_DATA } from  './view/view_main.js';

// create head
ElementCreatorRunner(SECTION_HEAD_DATA);

// create footer
ElementCreatorRunner(SECTION_FOOTER_DATA);

// create main
ElementCreatorRunner(SECTION_MAIN_DATA);

// create header
ElementCreatorRunner(SECTION_HEADER_DATA);

setBodyStyle(); // set body style

loadstaticHtmltoMain({'id': 'id_introduction', 'style': {}});