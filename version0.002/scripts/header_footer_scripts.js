const MAX_FONT_SIZE = 35
const MAX_FONT_SIZE_STR = MAX_FONT_SIZE + 'px'
const MIN_FONT_SIZE = 10
const MIN_FONT_SIZE_STR = MIN_FONT_SIZE + 'px'
const FACTORE = 37 


var device_width = 0;
var font_size = '';

setHeaderElementsSize()
fixTextPosition()

window.addEventListener("resize", function(event) {
    setHeaderElementsSize();
    fixTextPosition()
})

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
    
    // set logo size
    // some code
    
    // set font size
    font_size = getFontSize(edited_width)
    document.getElementById('header_bottom').style.fontSize = font_size;
};

function sizeToPercentege(size) {

}

function fixTextPosition() {
    var device_width = getDeviceWidth()
    // var edited_width = 3 + Math.floor(Math.pow(device_width/8000), 2);
    var edited_width = 12;
    document.getElementById('dummy').style.paddingTop = edited_width + "%";
}