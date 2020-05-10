import {ID, WEBSITE_COLORS} from  '../../model/consts.js';
import {MAIN_SECTIONS} from  '../../view/view_main.js';
import {getHeaderHeight} from './events_main.js';

function loadstaticHtmltoMain(event){
    /**
     * temp func to show the 
     */
    const ids = ['id_introduction', 'id_experience', 'id_education', 'id_projects', 'id_contact']
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
        // main.innerHTML = "<br/><br/>However, work with cadavers presented almost as many problems as it resolved. Not only were there the moral and ethical issues related to working with the dead, but there were also research concerns. The majority of cadavers available were older adults males who had died non-violent deaths; they did not represent a demographic cross-section of accident victims. Deceased accident victims could not be employed because any data that might be collected from such experimental subjects would be compromised by the cadaver's previous injuries. Since no two cadavers are the same, and since any specific part of a cadaver could only be used once, it was extremely difficult to achieve reliable comparison data. In addition, child cadavers were not only difficult to obtain, but both legal and public opinion made them effectively unusable. Moreover, as crash testing became more routine, suitable cadavers became increasingly scarce. As a result, biometric data were limited in extent and skewed toward the older males.";
    }
    else if (event.id == 'id_experience') {
        // child = MAIN_SECTIONS.MAIN_EXPRIANCE; // returns element
        main.innerHTML = "<br/><br/>However, work with cadavers presented almost as many problems as it resolved. Not only were there the moral and ethical issues related to working with the dead, but there were also research concerns. The majority of cadavers available were older adults males who had died non-violent deaths; they did not represent a demographic cross-section of accident victims. Deceased accident victims could not be employed because any data that might be collected from such experimental subjects would be compromised by the cadaver's previous injuries. Since no two cadavers are the same, and since any specific part of a cadaver could only be used once, it was extremely difficult to achieve reliable comparison data. In addition, child cadavers were not only difficult to obtain, but both legal and public opinion made them effectively unusable. Moreover, as crash testing became more routine, suitable cadavers became increasingly scarce. As a result, biometric data were limited in extent and skewed toward the older males.";
    } //   id_contact
    else if (event.id == 'id_education') {
        // child = MAIN_SECTIONS.MAIN_EDUCATION; // returns element
        main.innerHTML = "<br/><br/>Albert King's 1995 Journal of Trauma article, Humanitarian Benefits of Cadaver Research on Injury Prevention, clearly states the value in human lives saved as a result of cadaver research. King's calculations indicate that as a result of design changes implemented up to 1987, cadaver research since saved 8,500 lives annually.[8] He notes that for every cadaver used, each year 61 people survive due to wearing seat belts, 147 live due to air bags, and 68 survive windshield impact.";
    }
    else if (event.id == 'id_projects') {
        child = MAIN_SECTIONS.MAIN_PROJECTS;
    }
    else if (event.id == 'id_contact') {
        // child = MAIN_SECTIONS.MAIN_CONTANT; // returns element
        main.innerHTML = "<br/><br/>Detroit's Wayne State University was the first to begin serious work on collecting data on the effects of high-speed collisions on the human body. In the late 1930s there was no reliable data on how the human body responds to the sudden, violent forces acting on it in an automobile accident. Furthermore, no effective tools existed to measure such responses. Biomechanics was a field barely in its infancy. It was therefore necessary to employ two types of test subjects in order to develop initial data sets.";
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