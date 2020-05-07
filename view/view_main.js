import {
    TAG,
    ID,
    PROPERTICE,
} from '../model/000_consts.js';

import {
    getHeaderHeight,
    getFooterHeight,
} from '../controller/events_main.js';

// import {
//     loadstaticHtmltoMain
// } from '../controller/functions_global.js'

const MAIN_MATA = {
    [PROPERTICE.ELEMENT]: TAG.MAIN,
    [PROPERTICE.PERENT_ID]: ID.BODY,
    [PROPERTICE.ATTRIBUTS]: {id: ID.MAIN},
    [PROPERTICE.INNER_HTML]: 'testing1<br/>testing2<br/>testing3<br/>testing4<br/>testing5<br/>testing6<br/>',
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

export {
    MAIN_MATA,
}