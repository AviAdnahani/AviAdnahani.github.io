import { TAG, ID, PROPERTICE } from '../model/consts.js';
import { getHeaderHeight, getFooterHeight } from '../controller/events/events_main.js';
import { PROJECT_DATA } from  '../model/main_projects.js';
import { INTRODUCTION } from  '../model/main_introducction.js';
import { getTable } from '../controller/functions/table_creator.js';

const MAIN_MATA = {
    [PROPERTICE.ELEMENT]: TAG.MAIN,
    [PROPERTICE.PERENT_ID]: ID.BODY,
    [PROPERTICE.ATTRIBUTS]: {id: ID.MAIN},
    [PROPERTICE.EVENTS]: {
        resize: {
            [PROPERTICE.STYLE]: { 
                marginTop: getHeaderHeight,
                marginBottom: getFooterHeight,
            }
        },
        load: {
            [PROPERTICE.STYLE]: { 
                marginTop: getHeaderHeight,
                marginBottom: getFooterHeight,
            }
        },
    },
    [PROPERTICE.STYLE]: { 
        marginTop: getHeaderHeight,
        marginBottom: getFooterHeight,
    },
}

const MAIN_SECTIONS = {
    MAIN_INTODUCTION: INTRODUCTION, // just get the data as element
    MAIN_EXPRIANCE: '',
    MAIN_EDUCATION: '',
    MAIN_PROJECTS: getTable(PROJECT_DATA),
    MAIN_CONTANT: '', // just get the data as element
}


const SECTION_MAIN_DATA = [
    MAIN_MATA,
];


export { 
    SECTION_MAIN_DATA,
    MAIN_SECTIONS,
}