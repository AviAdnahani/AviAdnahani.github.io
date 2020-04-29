const CLASS_HEADER_BOTTOM_LINK = 'header_bottom_link';
const CLASS_ICONS = 'icons';
const TAG_BODY = 'body';
const CLASS_HEADER = 'header';
const CLASS_FOOTER = 'footer';
const ID_HEADER_TOP = 'header_top';
const ID_LOGO = 'logo';
const ID_HEADER_BOTTOM = 'header_bottom';
const CLASS_NAV_BAR = 'nav_bar';

function styleGeneral(){
    // class: nav_bar
    var nav = document.getElementsByClassName(CLASS_NAV_BAR);
    for(var i = 0; i < nav.length; i++) {
        nav[i].style.boxShadow = "0px 0px 10px 0px black";
        nav[i].style.width = "100%";
        nav[i].style.position = "fixed";
        nav[i].style.display = "flex";
        nav[i].style.color = "white";
        nav[i].style.backgroundColor = "#006d77";
    }
};

function styleBody(){
    // tag: body
    document.getElementsByTagName(TAG_BODY)[0].style.margin = 0;
    document.getElementsByTagName(TAG_BODY)[0].style.padding = 0;
    document.getElementsByTagName(TAG_BODY)[0].style.fontFamily = "Comfortaa", "cursive";
};

function styleHeder(){
    // tag: header
    document.getElementsByTagName(CLASS_HEADER)[0].style.top = 0;
    document.getElementsByTagName(CLASS_HEADER)[0].style.flexDirection = "column";    

    // id: header_top
    document.getElementById(ID_HEADER_TOP).style.display = "flex";
    document.getElementById(ID_HEADER_TOP).style.alignItems = "center";
    document.getElementById(ID_HEADER_TOP).style.justifyContent = "center";

    // id: logo
    document.getElementById(ID_LOGO).style.display = "block";
    document.getElementById(ID_LOGO).style.width = "11%";
    document.getElementById(ID_LOGO).style.marginLeft = "auto";
    document.getElementById(ID_LOGO).style.marginRight = "auto";

    // class: header_bottom_link
    const links = document.getElementsByClassName(CLASS_HEADER_BOTTOM_LINK);
    for (const link of links) {
        link.style.display = "flex";
        link.style.width = "100%";
        link.style.height = "100%";
        link.style.padding = "1%";
        link.style.justifyContent = "center";
        link.style.userSelect = "none";
        link.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = "#83c5be";
            event.target.style.userSelect = "none";
        }, false);
        link.addEventListener("mouseleave", function( event ) {   
            event.target.style.backgroundColor = "";
        }, false);
    };

    // id: header_bottom
    document.getElementById(ID_HEADER_BOTTOM).style.display = "flex";
    document.getElementById(ID_HEADER_BOTTOM).style.flexDirection = "row";
    document.getElementById(ID_HEADER_BOTTOM).style.justifyContent = "space-evenly";
    document.getElementById(ID_HEADER_BOTTOM).style.textTransform = "capitalize";
};

function styleFooter(){
// class: icons
    const icons = document.getElementsByClassName(CLASS_ICONS);
    for (const icon of icons) {
        icon.style.display = "block";
        icon.style.margin = "auto";
        icon.style.padding = "auto";
        icon.style.fontSize = 0;
        icon.style.width = "23%";
        icon.addEventListener('mouseenter', function(event) {
            event.target.style.opacity = "0.6";
        }, false);
        icon.addEventListener("mouseleave", function( event ) {   
            event.target.style.opacity = "1";
        }, false);
    };
        // tag: footer
    document.getElementsByTagName(CLASS_FOOTER)[0].style.bottom = 0;
    document.getElementsByTagName(CLASS_FOOTER)[0].style.justifyContent = "space-evenly";
};

function style() {
    styleGeneral();
    styleHeder();
    styleBody();
    styleFooter();
}

export { style }