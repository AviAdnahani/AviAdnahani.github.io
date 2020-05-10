import {PROPERTICE_TABLE_DATA} from './consts.js';

const text = `Developed code for Big Data analysis using python and pandas,<br> 
worked with Mysql ,MongoDB, Docker and K8S.<br><br>
Collaborated in an increment of the test coverage 
by developing an automated test creator which resulted in more than 90% test coverage in less than 3 months.`;

const EMPTY = '';
//main_
const TRAX_MAIN_CONTENT = `${text}<br>`;
const TRAX = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: '2020<br>2019',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Python Developer',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'Trax Retail',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: TRAX_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const text2 = 'Provided private lessons in Python, C, and C++, as well as basic web development in HTML, CSS and JavaScript. Teaching the fundamentals and advanced concepts. Making sure the student meets his goals.';
const TUTOR_MAIN_CONTENT = `${text2}`;
const TUTOR = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: '2018<br>2017',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Private Tutor',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'BGU university, SCE college ',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: TUTOR_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const EXPERIENCE_DATA = {
    'TRAX': TRAX,
    'TUTOR': TUTOR,
};

export { EXPERIENCE_DATA };