// const MAX_FONT_SIZE = 35
// const MAX_FONT_SIZE_STR = MAX_FONT_SIZE + 'px'
// const MIN_FONT_SIZE = 10
// const MIN_FONT_SIZE_STR = MIN_FONT_SIZE + 'px'
// const FACTORE = 37 


// var device_width = 0;
// var font_size = '';

setMainElmentsMargin();
stickyTopTable();

//scroll
window.addEventListener("scroll", function(event) {
    setMainElmentsMargin();
    stickyTopTable();
});

window.addEventListener("resize", function(event) {
     setMainElmentsMargin();
    stickyTopTable();
});

function setMainElmentsMargin() {
    var height_header = window.getComputedStyle(header).getPropertyValue("height");
    var footer = document.getElementById("footer");
    var height_footer = window.getComputedStyle(footer, null).getPropertyValue("height");
    document.getElementById('main').style.marginTop = height_header;
    document.getElementById('main').style.marginBottom = height_footer;
    document.getElementsByClassName('main_table_columns')[0].style.top = height_header;
}

function stickyTopTable() {
    var top = window.getComputedStyle(header).getPropertyValue("height");
    for (const t of document.getElementsByTagName('th')) {
        t.style.top = top;
    }
}