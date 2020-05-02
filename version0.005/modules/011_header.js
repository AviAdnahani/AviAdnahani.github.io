import { 
    DIV, 
    HEADER, 
    ID_BODY,
    ID_HEADER, 
    ID_HEADER_BOTTOM, 
    ID_LOGO,
    COLOR_GREEN_DARK,
    COLOR_GREEN_LIGHT,  
    PATH_LOGO,
    IMG,
} from './000_consts.js';


const HEADER_META = {
    element: HEADER,
    perent_id: ID_BODY,
    attributs: {id: ID_HEADER},
    style: {
        boxShadow: "black 0px 0px 10px 0px",
        width: "100%",
        position: "fixed",
        display: "flex",
        color: "white",
        background: COLOR_GREEN_DARK,
        top: "0", 
        flexDirection: "column",
    }
};

const LOGO_IMAGE_META = {
    element: IMG,
    perent_id: ID_HEADER,
    attributs: { 
        id: ID_LOGO,
        src: PATH_LOGO,
        alt: "mylogo",
    },
    style: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "15%",
        height: "auto",
    }
};

const HEADER_BOTTOM_META = {
    element: DIV,
    perent_id: ID_HEADER,
    attributs: {id: ID_HEADER_BOTTOM},
    style: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        textTransform: "capitalize",
        margin: "auto",
        padding: "auto",
    }
};

const HEADER_BOTTOM_ELEMENT_TEMPLATE = {
    element: DIV,
    perent_id: ID_HEADER_BOTTOM,
    attributs: {
        onclick: "loadMain(this);"
    },
    style: {
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "1%",
        justifyContent: "center",
        userSelect: "none",
        fontSize: "2vw"
    },
    events: {
        mouseenter: {
            style: {
                backgroundcolor: COLOR_GREEN_LIGHT,
            },
        },
        mouseleave: {
            style: {
                backgroundcolor: COLOR_GREEN_DARK,
            }
        },
    },
}

const HEADER_BOTTOM_ELEMENT_METADATA = {
    introduction: {
        attributs: {
            id: "id_introduction",  
        },
        innerHtml: "introduction",
    },
    experience: {
        attributs: {
            id: "id_experience",
        },
        innerHtml: "experience",
    },
    education: {
        attributs: {
        id: "id_education",
        },
        innerHtml: "education",
    },
    projects: {
        attributs: {
            id: "id_projects",
        },
        innerHtml: "projects",
    },
    contact: {
        attributs: {
            id: "id_contact",
        },
        innerHtml: "contact",
    },
}


export { 
    HEADER_META, 
    LOGO_IMAGE_META, 
    HEADER_BOTTOM_META,
    HEADER_BOTTOM_ELEMENT_TEMPLATE,
    HEADER_BOTTOM_ELEMENT_METADATA
  }