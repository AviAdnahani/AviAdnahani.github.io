import { 
    TAG,
    URL_EXTERNAL,
    PROPERTICE 
} from '../model/000_consts.js'

const STYLESHEET_FONT_META = {
    [PROPERTICE.ELEMENT]: TAG.LINK, 
    [PROPERTICE.PERENT_ID]: "id_head",
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_font_link",
        rel: "stylesheet",
        href: URL_EXTERNAL.STYLESHEET_FONT_HREF, 
    },
}

const VIEWPORT_META = {
    [PROPERTICE.ELEMENT]: TAG.META,
    [PROPERTICE.PERENT_ID]: "id_head",
    [PROPERTICE.ATTRIBUTS]: {
        id: "id_viewport",
        name: "viewport", 
        content: "width=device-width, initial-scale=1.0"
    }
}

const SECTION_HEAD_DATA = [
    STYLESHEET_FONT_META, 
    VIEWPORT_META 
]

export { SECTION_HEAD_DATA };