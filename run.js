import { ElementCreatorRunner } from './controller/functions/elment_creators.js';
import { setBodyStyle } from './controller/events/events_load.js';
import { SECTION_HEAD_DATA } from './view/view_head.js';
import { SECTION_HEADER_DATA } from './view/view_header.js';
import { SECTION_FOOTER_DATA } from './view/view_footer.js';
import { SECTION_MAIN_DATA } from  './view/view_main.js';


import {tableCreator} from './controller/functions/table_creator.js';
import {MAIN_TABLE, MAIN_TABLE_THEAD, MAIN_TABLE_TBODY} from './view/view_main.js';
import {ID} from './model/000_consts.js';

// create head
ElementCreatorRunner(SECTION_HEAD_DATA);

// create footer
ElementCreatorRunner(SECTION_FOOTER_DATA);

// create main
ElementCreatorRunner(SECTION_MAIN_DATA);

// create header
ElementCreatorRunner(SECTION_HEADER_DATA);

setBodyStyle(); // set body style

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue.'
const TEST_DATA = [
    [
        '2020<br>2019', 
        ['title 111', 'not main title'], 
        ''
    ],
    [
        '', 
        text, 
        ''
    ],
    [
        '2018<br>2019', 
        ['title 222', 'not main title'], 
        ''
    ],
    [
        '', 
        text, 
        ''
    ],
    [
        '2020<br>2019', 
        ['title 333', 'not main title'], 
        ''
    ],
    [
        '', 
        text, 
        ''
    ],
    [
        '2018<br>2019', 
        ['title 444', 'not main title'], 
        ''
    ],
    [
        '', 
        text, 
        ''
    ],
];

let creator = new tableCreator(TEST_DATA);
const table = creator.run();
var main = document.getElementById(ID.MAIN);
main.appendChild(table);