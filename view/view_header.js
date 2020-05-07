import {
    TAG,
    ID, 
    WEBSITE_COLORS,
    URL_INTERNAL,
    PROPERTICE,
} from '../model/000_consts.js';

import {
    loadstaticHtmltoMain
} from '../controller/functions_global.js';

var HEADER_FONT_SIZE = "2vh";
var PATH_LOGO = URL_INTERNAL.LOGO;
var ID_HEADER_BUTTONS = ID.HEADER_BUTTONS;

const HEADER_META = {
    [PROPERTICE.ELEMENT]: TAG.HEADER,
    [PROPERTICE.PERENT_ID]: ID.BODY,
    [PROPERTICE.ATTRIBUTS]: {id: ID.HEADER},
    [PROPERTICE.STYLE]: {
        boxShadow: "black 0px 0px 10px 0px",
        width: "100%",
        position: "fixed",
        display: "flex",
        color: "white",
        background: WEBSITE_COLORS.GREEN_DARK,
        top: "0", 
        flexDirection: "row",
    }
};

const LOGO_IMAGE_META = {
    [PROPERTICE.ELEMENT]: TAG.IMG,
    [PROPERTICE.PERENT_ID]: ID.HEADER,
    [PROPERTICE.ATTRIBUTS]: { 
        id: ID.LOGO,
        src: PATH_LOGO,
        alt: "mylogo",
    },
    [PROPERTICE.STYLE]: {
        display: "block",
        padding: "1%",
        // width: "20%",
        height: "5vh",
        // height: "5px",
    }
};

const HEADER_BOTTOM_META = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER,
    [PROPERTICE.ATTRIBUTS]: {id: ID_HEADER_BUTTONS},
    [PROPERTICE.STYLE]: {
        display: "flex",
        // flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        textTransform: "capitalize",
        margin: "auto",
        marginTop: "0",
        marginBottom: "0",
        padding: "auto",
//         paddingLeft: "2%",
//         paddingRight: "2%",
    }
};

var INTRODUCTION = 'introduction';
var EXPERIENCE = "experience";
var EDUCATION = "education";
var PROJECTS = "projects";
var CONTACT = "contact";
var GFUNC = 'loadMain()';

var GEVENT = {
    mouseenter: {
        [PROPERTICE.STYLE]: {
            background: WEBSITE_COLORS.GREEN_LIGHT,
        },
    },
    mouseleave: {
        [PROPERTICE.STYLE]: {
            background: WEBSITE_COLORS.GREEN_DARK,
        }
    },
    click: {
        FUNCTIONS: [
            loadstaticHtmltoMain,
        ]
    }
}

var GSTYLE = {
    display: "flex",
    padding: "1vw 4vw 1vw 4vw",
    // width: "20%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    fontSize: HEADER_FONT_SIZE,
}

const HEADER_BOTTOM_INTRODUCTION = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID_HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: INTRODUCTION,
    [PROPERTICE.ATTRIBUTS]: {
        id: 'id_' + INTRODUCTION,  
    },
    [PROPERTICE.STYLE]: GSTYLE,
    [PROPERTICE.EVENTS]: GEVENT,
}

const HEADER_BOTTOM_EXPERIENCE = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID_HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: EXPERIENCE,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_" + EXPERIENCE,
    },
    [PROPERTICE.STYLE]: GSTYLE,
    [PROPERTICE.EVENTS]: GEVENT,
}

const HEADER_BOTTOM_EDUCATION = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID_HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: EDUCATION,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_"+EDUCATION,
    },
    [PROPERTICE.STYLE]: GSTYLE,
    [PROPERTICE.EVENTS]: GEVENT,
}

const HEADER_BOTTOM_PROJECTS = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID_HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: PROJECTS,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_"+PROJECTS,
    },
    [PROPERTICE.STYLE]: GSTYLE,
    [PROPERTICE.EVENTS]: GEVENT,
}

const HEADER_BOTTOM_CONTACT = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID_HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: CONTACT,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_" + CONTACT,
    },
    [PROPERTICE.STYLE]: GSTYLE,
    [PROPERTICE.EVENTS]: GEVENT,
}

export { 
    HEADER_META, 
    LOGO_IMAGE_META, 
    HEADER_BOTTOM_META,
    HEADER_BOTTOM_INTRODUCTION,
    HEADER_BOTTOM_EXPERIENCE,
    HEADER_BOTTOM_EDUCATION,
    HEADER_BOTTOM_PROJECTS,
    HEADER_BOTTOM_CONTACT,
  }