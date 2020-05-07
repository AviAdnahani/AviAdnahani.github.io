import { 
    STYLESHEET_FONT_HREF 
} from '../model/000_consts.js'

const STYLESHEET_FONT_META = {
    element: "link", 
    perent_id: "id_head",
    attributs: {
        id: "id_font_link",
        rel: "stylesheet",
        href: STYLESHEET_FONT_HREF, 
    },
}

const VIEWPORT_META = {
    element: "meta",
    perent_id: "id_head",
    attributs: {
        id: "id_viewport",
        name: "viewport", 
        content: "width=device-width, initial-scale=1.0"
    }
}

export { 
    STYLESHEET_FONT_META, 
    VIEWPORT_META 
};