import {
    WHATSAPP_HREF,
    WHATSAPP_SRC,
    EMAIL_HREF,
    EMAIL_SRC,
    LINKDIN_HREF,
    LINKDIN_SRC,
    GITHUB_HREF,
    GITHUB_SRC,
    LOCATION_HREF,
    LOCATION_SRC,
    IMG,
    A,
    FOOTER,
    DIV,
    ID_BODY,
    ID_FOOTER,
    COLOR_GREEN_DARK,
    FOOTER_IMG_SIZE,
} from '../model/000_consts.js'

const STYLE_FOTTER = {
    boxShadow:  "0px 0px 10px 0px black",
    width:  "100%",
    position:  "fixed",
    display:  "flex",
    color:  "white",
    backgroundColor:  COLOR_GREEN_DARK,
    bottom: "0",
    justifyContent: "space-evenly", 
}

const WHATSAPP = "whatsapp";
const EMAIL = "email";
const LINKDIN = "linkdin";
const GITHUB = "github";
const LOCATION = "location";

// footer
const FOOTER_META = {
    element: FOOTER,
    perent_id: ID_BODY,
    attributs: {
        id: ID_FOOTER,
    },
    style: STYLE_FOTTER,
}

const STYLE_FOOTER_A = {
    margin: "auto",
    padding: "1%",
}

// footer links template
const FOOTER_A_WHATSAPP = {
    element: A,
    perent_id: ID_FOOTER,
    attributs: {
        target: "_blank",
        id: "id_a_" + WHATSAPP,
        href: WHATSAPP_HREF
    },
    style: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_EMAIL = {
    element: A,
    perent_id: ID_FOOTER,
    attributs: {
        target: "_blank",
        id: "id_a_"+EMAIL,
        href: EMAIL_HREF,
    },
    style: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_LINKDIN = {
    element: A,
    perent_id: ID_FOOTER,
    attributs: {
        target: "_blank",
        id: "id_a_"+LINKDIN,
        href: LINKDIN_HREF,
    },
    style: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_GITHUB = {
    element: A,
    perent_id: ID_FOOTER,
    attributs: {
        target: "_blank",
        id: "id_a_" + GITHUB,
        href: GITHUB_HREF,
    },
    style: STYLE_FOOTER_A
}

// footer links template
const FOOTER_A_LOCATION = {
    element: A,
    perent_id: ID_FOOTER,
    attributs: {
        target: "_blank",
        id: "id_a_" + LOCATION,
        href: LOCATION_HREF,
    },
    style: STYLE_FOOTER_A
}

// footer img style
const STYLE_FOOTER_IMG = {
    width: FOOTER_IMG_SIZE,
    display: "block" ,
    margin: "auto",  
}

// footer img events
const EVENTS_FOOTER_IMA = {
    mouseenter: {
        style: {
            opacity: "0.6",
        },
    },
    mouseleave: {
        style: {
            opacity: "1",
        }
    },
}

// footer images template
const FOOTER_IMG_WHATSAPP = {
    element: IMG,
    perent_id: "id_a_"+WHATSAPP,
    attributs: {
        id: "id_img_"+WHATSAPP,
        title: WHATSAPP,
        src: WHATSAPP_SRC,
    },
    style: STYLE_FOOTER_IMG,
    events: EVENTS_FOOTER_IMA,
}
// footer images template
const FOOTER_IMG_EMAIL = {
    element: IMG,
    perent_id: "id_a_"+EMAIL,
    attributs: {
        id: "id_img_"+EMAIL,
        title: EMAIL,
        src: EMAIL_SRC,
    },
    style: STYLE_FOOTER_IMG,
    events: EVENTS_FOOTER_IMA,
}
// footer images template
const FOOTER_IMG_LINKDIN = {
    element: IMG,
    perent_id: "id_a_"+LINKDIN,
    attributs: {
        id: "id_img_"+LINKDIN,
        title: LINKDIN,
        src: LINKDIN_SRC,
    },
    style: STYLE_FOOTER_IMG,
    events: EVENTS_FOOTER_IMA,
}
// footer images template
const FOOTER_IMG_GITHUB = {
    element: IMG,
    perent_id: "id_a_"+GITHUB,
    attributs: {
            id: "id_img_"+GITHUB,
            title: GITHUB,
            src: GITHUB_SRC,
    },
    style: STYLE_FOOTER_IMG,
    events: EVENTS_FOOTER_IMA,
}
// footer images template
const FOOTER_IMG_LOCATION = {
    element: IMG,
    perent_id: "id_a_"+LOCATION,
    attributs: {
        id: "id_img_"+LOCATION,
        title: LOCATION,
        src: LOCATION_SRC,
    },
    style: STYLE_FOOTER_IMG,
    events: EVENTS_FOOTER_IMA,
}

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



