import {ID, WEBSITE_COLORS} from  '../../model/consts.js';
import {MAIN_SECTIONS} from  '../../view/view_main.js';
import {getHeaderHeight} from './events_main.js';

function loadstaticHtmltoMain(event){
    /**
     * temp func to show the 
     */
    const ids = ['id_introduction', 'id_experience', 'id_education', 'id_projects']
    for(var id of ids){
        const e = document.getElementById(id);
        e.style.color = WEBSITE_COLORS.GREEN_WHITE;
    }
    event.style.color = WEBSITE_COLORS.ORANGE_DARK;

    var main = document.getElementById(ID.MAIN);
    main.innerHTML = "";
    var child = document.createElement('text');

    if (event.id == 'id_introduction') {
        child = MAIN_SECTIONS.MAIN_INTODUCTION; // returns element
    }
    else if (event.id == 'id_experience') {
        child = MAIN_SECTIONS.MAIN_EXPRIANCE; // returns element
    } 
    else if (event.id == 'id_education') {
        child = MAIN_SECTIONS.MAIN_EDUCATION; // returns element
    }
    else if (event.id == 'id_projects') {
        child = MAIN_SECTIONS.MAIN_PROJECTS;
    }
    if (event.id == 'id_experience' | event.id == 'id_education' | event.id == 'id_projects'){
        const all_th = child.getElementsByTagName('th');
        for (var th of all_th){
            th.style.position = "sticky";
            th.style.top = getHeaderHeight();
        }
    }
    main.appendChild(child);
}

function setBodyStyle() {
    var body = document.getElementById(ID.BODY);
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.fontFamily = "Comfortaa, cursive";
}

export { setBodyStyle, loadstaticHtmltoMain};