// External URL's
const URL_EXTERNAL = {
    WHATSAPP_HREF: "https://api.whatsapp.com/send?phone=9720504385097",
    WHATSAPP_SRC: "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/whatsapp-512.png",
    EMAIL_HREF: "mailto:avrahamadnahani@gmail",
    EMAIL_SRC: "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png",
    LINKDIN_HREF: "https://www.linkedin.com/in/avraham-adnahani-45042215b",
    LINKDIN_SRC: " https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/linkedin-512.png",
    GITHUB_HREF: "https://www.github.com/AviAdnahani/AviAdnahani.github.io",
    GITHUB_SRC: "https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png",
    LOCATION_HREF: "https://maps.app.goo.gl/FDFf9BeaQq8S4ekb8",
    LOCATION_SRC: "https://cdn4.iconfinder.com/data/icons/office-and-business-conceptual-flat/178/13-512.png",
    STYLESHEET_FONT_HREF: "https://fonts.googleapis.com/css?family=Comfortaa&display=swap",
}

// Internal URL's
const URL_INTERNAL = {
    LOGO: "static/Logo.png"
}

// ID's Used in this project
const ID = {
    BODY: "id_body",
    HEADER: "id_header",
    HEADER_LOGO: 'id_header_top',
    HEADER_BUTTONS: 'id_buttons',
    FOOTER: "id_footer",
    LOGO: "id_logo",
    MAIN_BODY: "id_main_body",
    TABLE: "id_table",
    THEAD: "id_thead",
    TBODY: "id_tbody",
    MAIN: "id_main",
}

// TAG's Used in this project
const TAG = {
    LINK: "link",
    META: "meta",
    BODY: 'body',
    MAIN: 'main',
    DIV: 'div',
    IMG: 'img',
    A: 'a',
    HEADER: 'header',
    FOOTER: 'footer',
    TABLE: "table",
    THEAD: "thead",
    TBODY: "tbody",
    TR: 'tr',
    TH: 'th',
    TD: 'td',
}

// Colors Used in this project
const WEBSITE_COLORS = {
    GREEN_DARK: "#006D77",
    GREEN_LIGHT: "#83C5BE",
    GREEN_WHITE: "#EDF6F9",
    ORANGE_DARK : "#E29578",
    ORANGE_LIGHT: "#FFDDD2",
}

// SOCIAL MADIA data
const SOCIAL_MADIA_DATA = {
    WHATSAPP: {
        NAME: "WHATSAPP",
        HERF: URL_EXTERNAL.WHATSAPP_HREF,
        SRC: URL_EXTERNAL.WHATSAPP_SRC,
    },
    EMAIL: {
        NAME: "EMAIL",
        HERF: URL_EXTERNAL.EMAIL_HREF,
        SRC: URL_EXTERNAL.EMAIL_SRC,
    },
    LINKDIN: {
        NAME: "LINKDIN",
        HERF: URL_EXTERNAL.LINKDIN_HREF,
        SRC: URL_EXTERNAL.LINKDIN_SRC,
    },
    GITHUB: {
        NAME: "GITHUB",
        HERF: URL_EXTERNAL.GITHUB_HREF,
        SRC: URL_EXTERNAL.GITHUB_SRC,
    },
    LOCATION: {
        NAME: "LOCATION",
        HERF: URL_EXTERNAL.LOCATION_HREF,
        SRC: URL_EXTERNAL.LOCATION_SRC,
    },
}

const HEADER_BUTTONS_TXT = {
    INTRODUCTION: "introduction",
    EXPERIENCE: "experience",
    EDUCATION: "education",
    PROJECTS: "projects",
    CONTACT: "contact",
}

// this project object propertice
const PROPERTICE = {
    ELEMENT: "ELEMENT",
    PERENT_ID: "PERENT_ID",
    INNER_HTML: "INNER_HTML",
    ATTRIBUTS: "ATTRIBUTS",
    STYLE: "STYLE",
    EVENTS: "EVENTS",
    FUNCTIONS: "FUNCTIONS",
    ID: "ID",
}

const PROPERTICE_TABLE_DATA = {
    ROW1: 'ROW_1',
    ROW2: 'ROW_2',
    ROW3: 'ROW_3',
    CELL1: 'CELL_1',
    CELL2: 'CELL_2',
    CELL3: 'CELL_3',
    MAIN_TITLE: 'MAIN_TITLE',
    MINI_TITLE: 'MINI_TITLE',
}
export { 
    HEADER_BUTTONS_TXT,
    SOCIAL_MADIA_DATA,
    URL_INTERNAL,
    URL_EXTERNAL,
    WEBSITE_COLORS,
    TAG,
    ID,
    PROPERTICE,
    PROPERTICE_TABLE_DATA,
};