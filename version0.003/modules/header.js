import { addContentToMain } from './main.js'

const MAX_FONT_SIZE = 35
const MAX_FONT_SIZE_STR = MAX_FONT_SIZE + 'px'
const MIN_FONT_SIZE = 10
const MIN_FONT_SIZE_STR = MIN_FONT_SIZE + 'px'
const FACTORE = 37 

var font_size = '';
const contant = ['introduction','experience', 'education', 'projects', 'contact'];

function createHeader() {
    var header_bottom = document.createElement('div');
    var insert;
    header_bottom.setAttribute('id', 'header_bottom');

    for (const c of contant) {
        var a = document.createElement('a');
        a.setAttribute('herf', c);
        a.innerHTML = c;
        insert = document.createElement('div');
        insert.setAttribute('class', 'header_bottom_link');
        insert.setAttribute('id', c);
        insert.appendChild(a);
        header_bottom.appendChild(insert);
    }

    var img = document.createElement('img');
    img.setAttribute('id', 'logo'); 
    img.setAttribute('src', 'static/Logo.png');
    img.setAttribute('alt', "avis_logo");

    var header_top = document.createElement('div');
    header_top.setAttribute('id', 'header_top');
    header_top.appendChild(img);

    var header = document.createElement('header');
    header.setAttribute('id', 'header');
    header.setAttribute('class', 'nav_bar');

    header.appendChild(header_top);
    header.appendChild(header_bottom);

    // document.getElementsByTagName('body')[0].appendChild(header);
    var body = document.getElementsByTagName("body")[0]; 
    body.insertBefore(header, body.childNodes[0]);
}

function addEvenListenToLinks() {
    var elements = document.getElementsByClassName("header_bottom_link");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', addContentToMain, false);
    }
}

function addEvenListenToHeaderFontSize() {
    window.addEventListener("resize", function(event) {
        setHeaderElementsSize();
        // setMainElmentsMargin();
        // stickyTopTable();
    });
}

function getDeviceWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
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
    var edited_width = Math.ceil(device_width/FACTORE);
    font_size = getFontSize(edited_width)
    document.getElementById('header_bottom').style['fontSize'] = font_size;
};

export { createHeader, addEvenListenToLinks, addEvenListenToHeaderFontSize, setHeaderElementsSize };