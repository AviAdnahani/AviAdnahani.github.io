import {ID} from  '../../model/000_consts.js';

function loadstaticHtmltoMain(event){
    /**
     * temp func to show the 
     */
    var main = document.getElementById('id_main');
    main.innerHTML = event.id;
    // console.log(event.id);
    if (event.id == 'id_introduction') {
        main.innerHTML = '<br/><br/>A crash test dummy is a full-scale anthropomorphic test device (ATD) that simulates the dimensions, weight proportions and articulation of the human body during a traffic collision. Dummies are used by researchers, automobile and aircraft manufacturers to predict the injuries a person might sustain in a crash[1]. Modern dummies are usually instrumented to record data such as velocity of impact, crushing force, bending, folding, or torque of the body, and deceleration rates during a collision.[citation needed] Some dummies cost over US$400,000.[1]';
    }
    else if (event.id == 'id_experience') {
        main.innerHTML = "<br/><br/>However, work with cadavers presented almost as many problems as it resolved. Not only were there the moral and ethical issues related to working with the dead, but there were also research concerns. The majority of cadavers available were older adults males who had died non-violent deaths; they did not represent a demographic cross-section of accident victims. Deceased accident victims could not be employed because any data that might be collected from such experimental subjects would be compromised by the cadaver's previous injuries. Since no two cadavers are the same, and since any specific part of a cadaver could only be used once, it was extremely difficult to achieve reliable comparison data. In addition, child cadavers were not only difficult to obtain, but both legal and public opinion made them effectively unusable. Moreover, as crash testing became more routine, suitable cadavers became increasingly scarce. As a result, biometric data were limited in extent and skewed toward the older males.";
    } //   id_contact
    else if (event.id == 'id_education') {
        main.innerHTML = "<br/><br/>Albert King's 1995 Journal of Trauma article, Humanitarian Benefits of Cadaver Research on Injury Prevention, clearly states the value in human lives saved as a result of cadaver research. King's calculations indicate that as a result of design changes implemented up to 1987, cadaver research since saved 8,500 lives annually.[8] He notes that for every cadaver used, each year 61 people survive due to wearing seat belts, 147 live due to air bags, and 68 survive windshield impact.";
    }
    else if (event.id == 'id_projects') {
        main.innerHTML = "<br/><br/>The first test subjects were human cadavers. They were used to obtain fundamental information about the human body's ability to withstand the crushing and tearing forces typically experienced in a high-speed accident. To such an end, steel ball bearings were dropped on skulls, and bodies were dumped down unused elevator shafts onto steel plates. Cadavers fitted with crude accelerometers were strapped into automobiles and subjected to head-on collisions and vehicle rollovers.";
    }
    else if (event.id == 'id_contact') {
        main.innerHTML = "<br/><br/>Detroit's Wayne State University was the first to begin serious work on collecting data on the effects of high-speed collisions on the human body. In the late 1930s there was no reliable data on how the human body responds to the sudden, violent forces acting on it in an automobile accident. Furthermore, no effective tools existed to measure such responses. Biomechanics was a field barely in its infancy. It was therefore necessary to employ two types of test subjects in order to develop initial data sets.";
    }
}

function setBodyStyle() {
    var body = document.getElementById(ID.BODY);
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.fontFamily = "Comfortaa, cursive";
}

export { setBodyStyle, loadstaticHtmltoMain};