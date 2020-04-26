function setMainElmentsMargin() {
    var height_header = window.getComputedStyle(header).getPropertyValue("height");
    var footer = document.getElementsByClassName("footer")[0];
    var height_footer = window.getComputedStyle(footer, null).getPropertyValue("height");
    document.getElementById('main_box').style.marginTop = height_header;
    document.getElementById('main_box').style.marginBottom = height_footer;
}