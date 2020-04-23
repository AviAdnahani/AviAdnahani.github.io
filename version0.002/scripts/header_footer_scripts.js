const MAX_FONT_SIZE = 35
const MAX_FONT_SIZE_STR = MAX_FONT_SIZE + 'px'
const MIN_FONT_SIZE = 10
const MIN_FONT_SIZE_STR = MIN_FONT_SIZE + 'px'
const FACTORE = 37 


var device_width = 0;
var font_size = '';

setElementsSize()

window.addEventListener("resize", function(event) {
    display = document.getElementsByClassName('device_size')[0];
    setElementsSize();
})

function setElementsSize() {
    device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    size = Math.ceil(device_width/FACTORE);
    font_size = size < MAX_FONT_SIZE ? createSize(size): MAX_FONT_SIZE_STR;
    font_size = size < MIN_FONT_SIZE ? MIN_FONT_SIZE_STR: font_size;
    document.getElementById('header_bottom').style.fontSize = font_size;
};

function createSize(num) {
    return num + 'px'
};