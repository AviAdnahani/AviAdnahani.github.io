const MAX_FONT_SIZE = 35
const MAX_FONT_SIZE_STR = MAX_FONT_SIZE + 'px'
const MIN_FONT_SIZE = 10
const MIN_FONT_SIZE_STR = MIN_FONT_SIZE + 'px'
const FACTORE = 37 


var device_width = 0;
var font_size = '';

// setHeaderElementsSize();
setMainElmentsMargin();
stickyTopTable();

//scroll
window.addEventListener("scroll", function(event) {
    stickyTopTable();
});

window.addEventListener("resize", function(event) {
    // setHeaderElementsSize();
    setMainElmentsMargin();
    stickyTopTable();
});

function getDeviceWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
};

function getDeviceHeight() {
    return (window.innerHeight > 0) ? window.innerHeight : screen.height;
};

function createSize(num) {
    return num + 'px'
};

function getFontSize(width) {
    font_size = width < MAX_FONT_SIZE ? createSize(width): MAX_FONT_SIZE_STR;
    font_size = width < MIN_FONT_SIZE ? MIN_FONT_SIZE_STR: font_size;
    return font_size
}

function setHeaderElementsSize() {
    var device_width = getDeviceWidth()
    var device_hieght = getDeviceHeight()
    var edited_width = Math.ceil(device_width/FACTORE);
    var edited_hieght = Math.ceil(device_hieght/FACTORE); // for logo and footer
    font_size = getFontSize(edited_width)
    document.getElementById('header_bottom').style['fontSize'] = font_size;
};

function setMainElmentsMargin() {
    var height_header = window.getComputedStyle(header).getPropertyValue("height");
    var footer = document.getElementById("footer");
    var height_footer = window.getComputedStyle(footer, null).getPropertyValue("height");
    document.getElementById('main').style.marginTop = height_header;
    document.getElementById('main').style.marginBottom = height_footer;
    document.getElementsByClassName('main_table_columns')[0].style.top = height_header;
}

function stickyTopTable() {
    var top = window.getComputedStyle(header).getPropertyValue("height");;
    for (const t of document.getElementsByTagName('th')) {
        t.style.top = top;
    }
    
}

// function headerSwitch(turn_on) {
//     document.getElementsByClassName('header_bottom_link').style.backgroundColor = "#006d77"; // off
//     document.getElementById("").style.backgroundColor = "#83c5be";
// }