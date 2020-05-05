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
        flexDirection: "row",
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
        margin: "auto",
        padding: "1%",
        width: "10%",
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



var INTRODUCTION = 'introduction';
var EXPERIENCE = "experience";
var EDUCATION = "education";
var PROJECTS = "projects";
var CONTACT = "contact";
var GFUNC = 'loadMain()';
var GEVENT = {
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
}
var GSTYLE = {
    display: "flex",
    width: "100%",
    height: "100%",
    paddingTop: "3%",
    justifyContent: "center",
    userSelect: "none",
    fontSize: "1vw"
}

const HEADER_BOTTOM_INTRODUCTION = {
    element: DIV,
    perent_id: ID_HEADER_BOTTOM,
    innerHtml: INTRODUCTION,
    attributs: {
        id: 'id_' + INTRODUCTION,  
    },
    style: GSTYLE,
    events: GEVENT,
}

const HEADER_BOTTOM_EXPERIENCE = {
    element: DIV,
    perent_id: ID_HEADER_BOTTOM,
    innerHtml: EXPERIENCE,
    attributs: {
        id: "id_" + EXPERIENCE,
    },
    style: GSTYLE,
    events: GEVENT,
}

const HEADER_BOTTOM_EDUCATION = {
    element: DIV,
    perent_id: ID_HEADER_BOTTOM,
    innerHtml: EDUCATION,
    attributs: {
        id: "id_"+EDUCATION,
    },
    style: GSTYLE,
    events: GEVENT,
}

const HEADER_BOTTOM_PROJECTS = {
    element: DIV,
    perent_id: ID_HEADER_BOTTOM,
    innerHtml: PROJECTS,
    attributs: {
        id: "id_"+PROJECTS,
        onclick: GFUNC
    },
    style: {
        display: "flex",
        width: "100%",
        height: "100%",
        paddingTop: "3%",
        justifyContent: "center",
        userSelect: "none",
        fontSize: "1vw"
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

const HEADER_BOTTOM_CONTACT = {
    element: DIV,
    perent_id: ID_HEADER_BOTTOM,
    innerHtml: CONTACT,
    attributs: {
        id: "id_" + CONTACT,
    },
    style: GSTYLE,
    events: GEVENT,
}

// const HEADER_BOTTOM_ELEMENT_TEMPLATE = {
//     element: DIV,
//     perent_id: ID_HEADER_BOTTOM,
//     attributs: {
//         onclick: "loadMain(this);"
//     },
//     style: {
//         display: "flex",
//         width: "100%",
//         height: "100%",
//         paddingTop: "3%",
//         justifyContent: "center",
//         userSelect: "none",
//         fontSize: "1vw"
//     },
//     events: {
//         mouseenter: {
//             style: {
//                 backgroundcolor: COLOR_GREEN_LIGHT,
//             },
//         },
//         mouseleave: {
//             style: {
//                 backgroundcolor: COLOR_GREEN_DARK,
//             }
//         },
//     },
// }

// const HEADER_BOTTOM_ELEMENT_METADATA = {
//     introduction: {
//         attributs: {
//             id: "id_introduction",  
//         },
//         innerHtml: "introduction",
//     },
//     experience: {
//         attributs: {
//             id: "id_experience",
//         },
//         innerHtml: "experience",
//     },
//     education: {
//         attributs: {
//         id: "id_education",
//         },
//         innerHtml: "education",
//     },
//     projects: {
//         attributs: {
//             id: "id_projects",
//         },
//         innerHtml: "projects",
//     },
//     contact: {
//         attributs: {
//             id: "id_contact",
//         },
//         innerHtml: "contact",
//     },
// }

export { 
    HEADER_META, 
    LOGO_IMAGE_META, 
    HEADER_BOTTOM_META,
    // HEADER_BOTTOM_ELEMENT_TEMPLATE,
    // HEADER_BOTTOM_ELEMENT_METADATA,
    HEADER_BOTTOM_INTRODUCTION,
    HEADER_BOTTOM_EXPERIENCE,
    HEADER_BOTTOM_EDUCATION,
    HEADER_BOTTOM_PROJECTS,
    HEADER_BOTTOM_CONTACT,
  }