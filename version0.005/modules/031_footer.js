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
    ID_BODY,
    ID_FOOTER,
    COLOR_GREEN_DARK
} from './000_consts.js'

const STYLE_HEADER_FOTTER = {
    boxShadow = "0px 0px 10px 0px black",
    width = "100%",
    position = "fixed",
    display = "flex",
    color = "white",
    backgroundColor = COLOR_GREEN_DARK,
}

// footer
const footer = {
    element: FOOTER,
    perent_id: ID_BODY,
    attributs: {
        id: ID_FOOTER,
    },
    style: {
        style: STYLE_HEADER_FOTTER, // is style inside style, add this additional style 
        bottom: "0",
        justifyContent: "space-evenly",
    }
}

// footer img style
const STYLE_FOOTER_IMA = {
    fontSize: 0,
    width: Math.ceil(100/Object.keys(footer_a_metadata).length)+"%",
    height: "auto",
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
const footer_a_metadata = {
    whatsapp: {
        a_id: "id_a_whatsapp",
        a_perent_id: ID_FOOTER,
        a_herf: WHATSAPP_HREF,
    },
    email: {
        a_id: "id_a_email",
        a_perent_id: ID_FOOTER,
        a_herf: EMAIL_HREF,
    },
    linkdin: {
        a_id: "id_a_linkdin",
        a_perent_id: ID_FOOTER,
        a_herf: LINKDIN_HREF,
    },
    github: {
        a_id: "id_a_github",
        a_perent_id: ID_FOOTER,
        a_herf: GITHUB_HREF,
    },
    location: {
        a_id: "id_a_location",
        a_perent_id: ID_FOOTER,
        a_herf: LOCATION_HREF,
    },
}

// footer links template
const footer_a_template = {
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
const footer_img_metadata = {
    whatsapp: {
        img_id: "id_img_whatsapp",
        img_title: "whatsapp",
        img_src: WHATSAPP_SRC,
        img_perent_id: "id_a_whatsapp"
    },
    email: {
        img_id: "id_img_email",
        img_title: "email",
        img_src: EMAIL_SRC,
        img_perent_id: "id_a_email"
    },
    linkdin: {
        img_id: "id_img_linkdin",
        img_title: "linkdin",
        img_src: LINKDIN_SRC,
        img_perent_id: "id_a_linkdin"
    },
    github: {
        img_id: "id_img_github",
        img_title: "github",
        img_src: GITHUB_SRC,
        img_perent_id: "id_a_github"
    },
    location: {
        img_id: "id_img_location",
        img_title: "location",
        img_src: LOCATION_SRC,
        img_perent_id: "id_a_location"
    },
}

// footer images template
const footer_img_template = {
    element: IMG,
    style: STYLE_FOOTER_IMA,
    events: EVENTS_FOOTER_IMA,
}