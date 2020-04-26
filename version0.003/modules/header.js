// header HTML elements

// main element (level 1)
const header = {
    tag: 'header',
    perant_tag: 'body',
    id: 'header_id',
    class: 'nav_style',
    header_top: {
        tag: 'div',
        id: 'header_top_id',
        header_top_logo = {
            tag: 'img',
            id: 'logo_id', 
            src: "version0.002/static/Logo.png", 
            alt: "Paris",
        },
    },
    header_bottom: {
        tag: 'div',
        id: 'header_bottom_id',
        nav_elements = {
            introduction: {
                tag: 'div',
                class: 'header_bottom_link',
                id: 'Introduction',
                
            }
        }
    },
}

// nested elements (level 2)
const header_top = {
    tag: 'div',
    id: 'header_top_id',
    perant_id: 'header_id',
}

// nested elements (level 3)
const header_top_logo = {
    tag: 'img',
    perant_id: 'header_top_id',
    id: 'logo_id', 
    src: "version0.002/static/Logo.png", 
    alt: "Paris",
}

const header_bottom = {
    tag: 'div',
    id: 'header_bottom_id',
    perant_id: 'header_id',
}






// // script's related to header

// const MAX_FONT_SIZE = 35
// const MAX_FONT_SIZE_STR = MAX_FONT_SIZE + 'px'
// const MIN_FONT_SIZE = 10
// const MIN_FONT_SIZE_STR = MIN_FONT_SIZE + 'px'
// const MID_FONT_SIZE = 22
// const MID_FONT_SIZE_STR = MID_FONT_SIZE + 'px'

// const MAX_SCREEN_SIZE = 1024
// const MIN_SCREEN_SIZE = 340
// const FACTORE = (MAX_SCREEN_SIZE-MIN_SCREEN_SIZE)/(MAX_FONT_SIZE-MIN_FONT_SIZE) 

// const WEBSIT_COLORS = ["#83c5be", "#006d77"]

// // CSS id names
// const CSS_ID_HEADER_BOTTOM = 'header_bottom'
// const CSS_ID_HEADER_BOTTOM_LINK = 'header_bottom_link'

// // CSS class names

// function getDeviceWidth() {
//     /**/
//     return (window.innerWidth > 0) ? window.innerWidth : screen.width;
// };

// function getDeviceHeight() {
//     /**/
//     return (window.innerHeight > 0) ? window.innerHeight : screen.height;
// };

// function concat(root, addition) {
//     /**/
//     return root + addition;
// };

// function getFontSize(width) {
//     /**/
//     var font_size = MID_FONT_SIZE;
//     font_size = width < MAX_FONT_SIZE ? concat(width, 'px'): MAX_FONT_SIZE_STR;
//     font_size = width < MIN_FONT_SIZE ? MIN_FONT_SIZE_STR: font_size;
//     return font_size
// }

// function setHeaderElementsSize() {
//     /**/
//     var font_size = MID_FONT_SIZE;
//     var device_width = getDeviceWidth()
//     var edited_width = Math.ceil(device_width*FACTORE);
//     font_size = getFontSize(edited_width)
//     document.getElementById(CSS_ID_HEADER_BOTTOM).style.fontSize = font_size;
// };

// function headerSwitch(turn_on) {
//     /**/
//     document.getElementsByClassName(CSS_ID_HEADER_BOTTOM_LINK).style.backgroundColor = WEBSIT_COLORS[1]; // off
//     document.getElementById("").style.backgroundColor = WEBSIT_COLORS[0]; // on
// }