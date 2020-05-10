import {PROPERTICE_TABLE_DATA} from './consts.js';
const EMPTY = '';

const text2 = 'Studied NodeJS, HTML5, CSS3, JS6. and advanced concepts of the DOM API.';
const WEB_MAIN_CONTENT = `${text2}<br><br><br>`;
const WEB = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: '2018',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Web Development',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'SQlink bootcamp (4 months)',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: WEB_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const text = '<b>Final Project</b>: Developed a computer application that detects and tracks the movement of a rectangular object in real-time. The application is designed to focus on changes that occur in the scope of the object and gives efficient monitoring of changes which occur on rectangular objects, such as screens, pieces of paper. It was written in Python using packages such as OpenCV, NumPy, SciPy, and SymPy, and based on many algorithms and techniques found in image processing and motion detection.';
const SAMI_MAIN_CONTENT = `${text}<br><br><br>`;
const SAMI = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: '2017<br>2012',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Software Engineering (B.Sc.)',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'SCE College of Engineering',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: SAMI_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const EDUCATION_DATA = {
    'WEB': WEB,
    'SAMI': SAMI,
};

export { EDUCATION_DATA };