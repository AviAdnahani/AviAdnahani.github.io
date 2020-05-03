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
    COLOR_GREEN_DARK
} from './000_consts.js'

const STYLE_HEADER_FOTTER = {
    boxShadow:  "0px 0px 10px 0px black",
    width:  "100%",
    position:  "fixed",
    display:  "flex",
    color:  "white",
    backgroundColor:  COLOR_GREEN_DARK,
}

// footer
const FOOTER_META = {
    element: DIV,
    perent_id: ID_BODY,
    attributs: {
        id: ID_FOOTER,
    },
    style: {
        boxShadow:  "0px 0px 10px 0px black",
        width:  "100%",
        position:  "fixed",
        display:  "flex",
        color:  "white",
        backgroundColor:  COLOR_GREEN_DARK,
        bottom: "0",
        justifyContent: "space-evenly",    
    }
}

const FOOTER_A_METADATA = {
    whatsapp: {
        attributs: {
            id: "id_a_whatsapp",
            herf: WHATSAPP_HREF
        },
    },
    email: {
        attributs: {
            id: "id_a_email",
            herf: EMAIL_HREF,
        },
        
    },
    linkdin: {
        attributs: {
            id: "id_a_linkdin",
            herf: LINKDIN_HREF,
        },
    },
    github: {
        attributs: {
            id: "id_a_github",
            herf: GITHUB_HREF,
        },
    },
    location: {
        attributs: {
            id: "id_a_location",
            herf: LOCATION_HREF,
        },
        
    },
}

// footer img style
const STYLE_FOOTER_IMA = {
    width: Math.ceil(100/Object.keys(FOOTER_A_METADATA).length)+"%",
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

// footer links metadata


// footer links template
const FOOTER_A_TEMPLATE = {
    element: A,
    perent_id: ID_FOOTER,
    attributs: {
        target: "_blank",
    },
    style: {
        margin: "auto",
        padding: "1%",
    }
}

// footer images metadata
const FOOTER_IMG_METADATA = {
    whatsapp: {
        attributs: {
            id: "id_img_whatsapp",
            title: "whatsapp",
            src: WHATSAPP_SRC,
        },
        perent_id: "id_a_whatsapp"
    },
    email: {
        attributs: {
            id: "id_img_email",
            title: "email",
            src: EMAIL_SRC,
    },
        perent_id: "id_a_email"
    },
    linkdin: {
        attributs: {
            id: "id_img_linkdin",
            title: "linkdin",
            src: LINKDIN_SRC,
    },
        perent_id: "id_a_linkdin"
    },
    github: {
        attributs: {
            id: "id_img_github",
            title: "github",
            src: GITHUB_SRC,
    },
        perent_id: "id_a_github"
    },
    location: {
        attributs: {
            id: "id_img_location",
            title: "location",
            src: LOCATION_SRC,
        },
        perent_id: "id_a_location"
    },
}

// footer images template
const FOOTER_IMG_TEMPLATE = {
    element: IMG,
    style: STYLE_FOOTER_IMA,
    events: EVENTS_FOOTER_IMA,
}

export {
    FOOTER_META,
    FOOTER_A_METADATA,
    FOOTER_A_TEMPLATE,
    FOOTER_IMG_METADATA,
    FOOTER_IMG_TEMPLATE,
}