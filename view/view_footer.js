import {
    TAG,
    ID,
    WEBSITE_COLORS,
    SOCIAL_MADIA_DATA,
    PROPERTICE,
} from '../model/000_consts.js'


const WHATSAPP_DATA = SOCIAL_MADIA_DATA.WHATSAPP;
const EMAIL_DATA = SOCIAL_MADIA_DATA.EMAIL;
const LINKDIN_DATA = SOCIAL_MADIA_DATA.LINKDIN;
const GITHUB_DATA = SOCIAL_MADIA_DATA.GITHUB;
const LOCATION_DATA = SOCIAL_MADIA_DATA.LOCATION;


const STYLE_FOTTER = {
    boxShadow:  "0px 0px 10px 0px black",
    width:  "100%",
    position:  "fixed",
    display:  "flex",
    color:  "white",
    backgroundColor: WEBSITE_COLORS.GREEN_DARK,
    bottom: "0",
    justifyContent: "space-evenly", 
}

const STYLE_FOOTER_A = {
    display: "flex",
    margin: "auto",
    flexWrap: "wrap",
    padding: "1%",
}

// footer img style
const STYLE_FOOTER_IMG = {
    // width: FOOTER_IMG_SIZE,
    height: "5vh",
    display: "block" ,
    margin: "auto",  
}

// footer img events
const EVENTS_FOOTER_IMA = {
    mouseenter: {
        [PROPERTICE.STYLE]: {
            opacity: "0.6",
        },
    },
    mouseleave: {
        [PROPERTICE.STYLE]: {
            opacity: "1",
        }
    },
}

// footer
const FOOTER_META = {
    [PROPERTICE.ELEMENT]: TAG.FOOTER,
    [PROPERTICE.PERENT_ID]: ID.BODY,
    [PROPERTICE.ATTRIBUTS]: {
        id: ID.FOOTER,
    },
    [PROPERTICE.STYLE]: STYLE_FOTTER,
}

// footer links template
const FOOTER_A_WHATSAPP = {
    [PROPERTICE.ELEMENT]: TAG.A,
    [PROPERTICE.PERENT_ID]: ID.FOOTER,
    [PROPERTICE.ATTRIBUTS]: {
        target: "_blank",
        id: "id_a_" + WHATSAPP_DATA.NAME,
        href: WHATSAPP_DATA.HERF
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_EMAIL = {
    [PROPERTICE.ELEMENT]: TAG.A,
    [PROPERTICE.PERENT_ID]: ID.FOOTER,
    [PROPERTICE.ATTRIBUTS]: {
        target: "_blank",
        id: "id_a_"+EMAIL_DATA.NAME,
        href: EMAIL_DATA.HERF,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_LINKDIN = {
    [PROPERTICE.ELEMENT]: TAG.A,
    [PROPERTICE.PERENT_ID]: ID.FOOTER,
    [PROPERTICE.ATTRIBUTS]: {
        target: "_blank",
        id: "id_a_"+LINKDIN_DATA.NAME,
        href: LINKDIN_DATA.HERF,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_GITHUB = {
    [PROPERTICE.ELEMENT]: TAG.A,
    [PROPERTICE.PERENT_ID]: ID.FOOTER,
    [PROPERTICE.ATTRIBUTS]: {
        target: "_blank",
        id: "id_a_" + GITHUB_DATA.NAME,
        href: GITHUB_DATA.HERF,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_LOCATION = {
    [PROPERTICE.ELEMENT]: TAG.A,
    [PROPERTICE.PERENT_ID]: ID.FOOTER,
    [PROPERTICE.ATTRIBUTS]: {
        target: "_blank",
        id: "id_a_" + LOCATION_DATA.NAME,
        href: LOCATION_DATA.HERF,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_A
}

// footer images template
const FOOTER_IMG_WHATSAPP = {
    [PROPERTICE.ELEMENT]: TAG.IMG,
    [PROPERTICE.PERENT_ID]: "id_a_"+WHATSAPP_DATA.NAME,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_img_"+WHATSAPP_DATA.NAME,
        title: WHATSAPP_DATA.NAME,
        src: WHATSAPP_DATA.SRC,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_IMG,
    [PROPERTICE.EVENTS]: EVENTS_FOOTER_IMA,
}

// footer images template
const FOOTER_IMG_EMAIL = {
    [PROPERTICE.ELEMENT]: TAG.IMG,
    [PROPERTICE.PERENT_ID]: "id_a_"+EMAIL_DATA.NAME,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_img_"+EMAIL_DATA.NAME,
        title: EMAIL_DATA.NAME,
        src: EMAIL_DATA.SRC,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_IMG,
    [PROPERTICE.EVENTS]: EVENTS_FOOTER_IMA,
}

// footer images template
const FOOTER_IMG_LINKDIN = {
    [PROPERTICE.ELEMENT]: TAG.IMG,
    [PROPERTICE.PERENT_ID]: "id_a_"+LINKDIN_DATA.NAME,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_img_"+LINKDIN_DATA.NAME,
        title: LINKDIN_DATA.NAME,
        src: LINKDIN_DATA.SRC,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_IMG,
    [PROPERTICE.EVENTS]: EVENTS_FOOTER_IMA,
}

// footer images template
const FOOTER_IMG_GITHUB = {
    [PROPERTICE.ELEMENT]: TAG.IMG,
    [PROPERTICE.PERENT_ID]: "id_a_"+GITHUB_DATA.NAME,
    [PROPERTICE.ATTRIBUTS]: {
            id: "id_img_"+GITHUB_DATA.NAME,
            title: GITHUB_DATA.NAME,
            src: GITHUB_DATA.SRC,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_IMG,
    [PROPERTICE.EVENTS]: EVENTS_FOOTER_IMA,
}

// footer images template
const FOOTER_IMG_LOCATION = {
    [PROPERTICE.ELEMENT]: TAG.IMG,
    [PROPERTICE.PERENT_ID]: "id_a_"+LOCATION_DATA.NAME,
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_img_"+LOCATION_DATA.NAME,
        title: LOCATION_DATA.NAME,
        src: LOCATION_DATA.SRC,
    },
    [PROPERTICE.STYLE]: STYLE_FOOTER_IMG,
    [PROPERTICE.EVENTS]: EVENTS_FOOTER_IMA,
}

const SECTION_FOOTER_DATA = [
    FOOTER_META,
    FOOTER_A_WHATSAPP,
    FOOTER_A_EMAIL,
    FOOTER_A_LINKDIN,
    FOOTER_A_GITHUB,
    FOOTER_A_LOCATION,
    FOOTER_IMG_WHATSAPP,
    FOOTER_IMG_EMAIL,
    FOOTER_IMG_LINKDIN,
    FOOTER_IMG_GITHUB,
    FOOTER_IMG_LOCATION,
]

export {
    FOOTER_META,
    FOOTER_A_WHATSAPP,
    FOOTER_A_EMAIL,
    FOOTER_A_LINKDIN,
    FOOTER_A_GITHUB,
    FOOTER_A_LOCATION,
    FOOTER_IMG_WHATSAPP,
    FOOTER_IMG_EMAIL,
    FOOTER_IMG_LINKDIN,
    FOOTER_IMG_GITHUB,
    FOOTER_IMG_LOCATION,
}