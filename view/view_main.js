import { TAG, ID, PROPERTICE } from '../model/000_consts.js';
import { getHeaderHeight, getFooterHeight } from '../controller/events/events_main.js';

const MAIN_MATA = {
    [PROPERTICE.ELEMENT]: TAG.MAIN,
    [PROPERTICE.PERENT_ID]: ID.BODY,
    [PROPERTICE.ATTRIBUTS]: {id: ID.MAIN},
    // [PROPERTICE.INNER_HTML]: 'testing1<br/>testing2<br/>testing3<br/>testing4<br/>testing5<br/>testing6<br/>',
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

const MAIN_TABLE = {
    [PROPERTICE.ELEMENT]: TAG.TABLE,
    [PROPERTICE.PERENT_ID]: ID.MAIN_BODY,
    [PROPERTICE.ATTRIBUTS]: {
        [PROPERTICE.ID]:ID.TABLE
    },
    [PROPERTICE.STYLE]: {},
}

const MAIN_TABLE_THEAD = {
    [PROPERTICE.ELEMENT]: TAG.THEAD,
    [PROPERTICE.PERENT_ID]: ID.TABLE,
    [PROPERTICE.ATTRIBUTS]: {
        [PROPERTICE.ID]:ID.THEAD
    },
    [PROPERTICE.STYLE]: {},
}

const MAIN_TABLE_TBODY = {
    [PROPERTICE.ELEMENT]: TAG.TBODY,
    [PROPERTICE.PERENT_ID]: ID.TABLE,
    [PROPERTICE.ATTRIBUTS]: {
        [PROPERTICE.ID]:ID.TBODY
    },
    [PROPERTICE.STYLE]: {},
}


const SECTION_MAIN_DATA = [
    MAIN_MATA,
];

export { 
    SECTION_MAIN_DATA,
    
    MAIN_TABLE,
    MAIN_TABLE_THEAD,
    MAIN_TABLE_TBODY  
}