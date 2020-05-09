import { TAG, ID, WEBSITE_COLORS, URL_INTERNAL, PROPERTICE, HEADER_BUTTONS_TXT } from '../model/000_consts.js';
import { loadstaticHtmltoMain } from '../controller/events/events_load.js';

var HEADER_FONT_SIZE = "2vh";
var LOGO_PATH = URL_INTERNAL.LOGO;
var INTRODUCTION = HEADER_BUTTONS_TXT.INTRODUCTION;
var EXPERIENCE = HEADER_BUTTONS_TXT.EXPERIENCE;
var EDUCATION = HEADER_BUTTONS_TXT.EDUCATION;
var PROJECTS = HEADER_BUTTONS_TXT.PROJECTS;
var CONTACT = HEADER_BUTTONS_TXT.CONTACT;

var EVENT_HEADER_BUTTONS = {
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
        [PROPERTICE.FUNCTIONS]: [
            loadstaticHtmltoMain,
        ]
    }
}

var STYLE_HEADER_BUTTONS = {
    display: "flex",
    padding: "1vw 4vw 1vw 4vw",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    fontSize: HEADER_FONT_SIZE,
}

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
        src: LOGO_PATH,
        alt: "mylogo",
    },
    [PROPERTICE.STYLE]: {
        display: "block",
        padding: "1%",
        height: "5vh",
    }
};

const HEADER_BUTTONS_META = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER,
    [PROPERTICE.ATTRIBUTS]: {id: ID.HEADER_BUTTONS},
    [PROPERTICE.STYLE]: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        textTransform: "capitalize",
        margin: "auto",
        marginTop: "0",
        marginBottom: "0",
        padding: "auto",
    }
};

const HEADER_BUTTONS_INTRODUCTION = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: INTRODUCTION,
    [PROPERTICE.ATTRIBUTS]: {
        id: 'id_' + INTRODUCTION,  
    },
    [PROPERTICE.STYLE]: STYLE_HEADER_BUTTONS,
    [PROPERTICE.EVENTS]: EVENT_HEADER_BUTTONS,
}

const HEADER_BUTTONS_EXPERIENCE = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: EXPERIENCE,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_" + EXPERIENCE,
    },
    [PROPERTICE.STYLE]: STYLE_HEADER_BUTTONS,
    [PROPERTICE.EVENTS]: EVENT_HEADER_BUTTONS,
}

const HEADER_BUTTONS_EDUCATION = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: EDUCATION,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_"+EDUCATION,
    },
    [PROPERTICE.STYLE]: STYLE_HEADER_BUTTONS,
    [PROPERTICE.EVENTS]: EVENT_HEADER_BUTTONS,
}

const HEADER_BUTTONS_PROJECTS = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: PROJECTS,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_"+PROJECTS,
    },
    [PROPERTICE.STYLE]: STYLE_HEADER_BUTTONS,
    [PROPERTICE.EVENTS]: EVENT_HEADER_BUTTONS,
}

const HEADER_BUTTONS_CONTACT = {
    [PROPERTICE.ELEMENT]: TAG.DIV,
    [PROPERTICE.PERENT_ID]: ID.HEADER_BUTTONS,
    [PROPERTICE.INNER_HTML]: CONTACT,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_" + CONTACT,
    },
    [PROPERTICE.STYLE]: STYLE_HEADER_BUTTONS,
    [PROPERTICE.EVENTS]: EVENT_HEADER_BUTTONS,
}

const SECTION_HEADER_DATA = [
    HEADER_META, 
    LOGO_IMAGE_META, 
    HEADER_BUTTONS_META,
    HEADER_BUTTONS_INTRODUCTION,
    HEADER_BUTTONS_EXPERIENCE,
    HEADER_BUTTONS_EDUCATION,
    HEADER_BUTTONS_PROJECTS,
    HEADER_BUTTONS_CONTACT,
]

export { SECTION_HEADER_DATA }