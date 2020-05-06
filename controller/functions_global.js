import { 
    INNER_HTML, ID_BODY,
} from '../model/000_consts.js'

import {
    getHeaderHeight,
    getFooterHeight,
} from './events_main.js';

var WINDOW_EVENTS = ["resize", "load"];
var FUNCTION_EVENTS = ["click"];
var ELEMENT = "element";
var ID = "id";
var PERENT_ID = "perent_id";
var STYLE = "style";
var ATTRIBUTS = "attributs";
var EVENTS = "events";
var FUNCTIONS = "functions";

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

class elementCreator {
    /**
     * ELEMENT CREATOR
     * INPUT: dictionary object
     * OUTPUT: new element
     * 
     * NEED TO ADD TESTS: validate input, write error logs
     * 
     */
    #new_element = null;
    #new_element_tag = null;
    #perant_id = null;
    #attributes_dict = null;
    #style_dict = null;
    #events_dict = null;
    #inner_html = null;

    constructor(source, metadata=null) {
        this.SOURCE_DICT = source;
        this.TEMPLATE = metadata;
    }

    testExistence(KEY, DICT_INPUT=null){
        let DICT;
        if (!DICT_INPUT) {
            DICT = this.SOURCE_DICT;
        }
        else {
            DICT = DICT_INPUT;
        }
        return DICT.hasOwnProperty(KEY);
    }

    setPrivite() {
        if (this.testRequriedKeys()) {
            this.new_element_tag = this.SOURCE_DICT[ELEMENT];
            this.perant_id = this.SOURCE_DICT[PERENT_ID];
            this.attributes_dict = this.SOURCE_DICT[ATTRIBUTS];
        }
        else{
            console.error('THE INPUT DICTIONARY MISSES REQURIED KEYS');
            return false;
        }
        if (this.SOURCE_DICT.hasOwnProperty(STYLE)) {
            this.style_dict = this.SOURCE_DICT[STYLE];
        }
        if (this.SOURCE_DICT.hasOwnProperty(INNER_HTML)) {
            this.inner_html = this.SOURCE_DICT[INNER_HTML];
        }
        if (this.SOURCE_DICT.hasOwnProperty(EVENTS)) {
            this.events_dict = this.SOURCE_DICT[EVENTS];
        }
        return true;
    }

    testRequriedKeys() {
        var test_key_1 = this.testExistence(ELEMENT);
        var test_key_2 = this.testExistence(PERENT_ID);
        var test_key_3 = this.testExistence(ATTRIBUTS);
        var test_all = test_key_1 & test_key_2  & test_key_3;
        if (test_all) {
            if (this.testExistence(ID, this.SOURCE_DICT[ATTRIBUTS])) {
                return true;
            }
        }
        return false;
    }

    createNewElement() {
        this.new_element = document.createElement(this.new_element_tag);
    }

    appendNewElementToPerant(new_element_input=null) {
        // append child to perant
        var perant = document.getElementById(this.perant_id); 
        if (this.perant_id == ID_BODY) {
            perant.insertBefore(this.new_element, perant.childNodes[0]);
        }
        else {
            perant.appendChild(this.new_element);
        }
        return true;
    }
    
    setElementAttributes() {
        for (const attributes in this.attributes_dict) {
            this.new_element.setAttribute(attributes, this.attributes_dict[attributes]);
        }
    }

    setStyle() {
        for (const new_style in this.style_dict) {
            this.new_element.style[new_style] = this.style_dict[new_style];
        }
    }

    setEvents() {
        for (const event_name in this.events_dict) {    
            var new_event_dict = this.events_dict[event_name];
            if (this.testExistence(STYLE, new_event_dict)){
                var new_style_dict = new_event_dict[STYLE];
                for (const style_name in new_style_dict){
                    const style_value = new_style_dict[style_name];
                    if (!WINDOW_EVENTS.includes(event_name)) {
                        this.new_element.addEventListener(event_name, function(event) {
                            if (style_value && {}.toString.call(style_value) === '[object Function]') {
                                event.target.style[style_name] = style_value();
                            }
                            else {
                                event.target.style[style_name] = style_value;
                            }
                        }, false);
                    }
                }
            }
            if (this.testExistence(FUNCTIONS, new_event_dict)){
                var func_list = new_event_dict[FUNCTIONS];
                for (const func of func_list) {
                    this.new_element.addEventListener(event_name, function() {
                        func(event.target);             
                    }, false);
                }
            }
        }
    }

    setInnerHtml() {
        this.new_element.innerHTML = this.SOURCE_DICT[INNER_HTML];
    }

    run() {
        let status;
        status = this.setPrivite();
        if(status) {
            this.createNewElement();
            if(this.attributes_dict) this.setElementAttributes(); // not have to do this if (this is dict is required)
            if(this.style_dict) this.setStyle();
            if(this.events_dict) this.setEvents();
            if(this.inner_html) this.setInnerHtml();
            return this.appendNewElementToPerant();
        }
        console.error('DID NOT SET ATTRIBUTES!! - the status is false');
        return false;
    }
}

class eventCreator {
    /**
     * gets element and style dict
     */
    
}

class styleCreator {
    /**
     * gets element and event dict
     */
}

class windowEventCreator {
    #element_dict
    #element_id
    #window_events_list

    constructor(element_dict) {
        this.element_dict = element_dict;
        this.element_id = this.element_dict[ATTRIBUTS][ID];
        this.window_events_list = [];
    }

    createStyleEvent(window_event_name, style_name, style_value) {
        var element = document.getElementById(this.element_id);
        window.addEventListener(window_event_name, function(){
            if (style_value && {}.toString.call(style_value) === '[object Function]') {
                element.style[style_name] = style_value();
            }
            else {
                element.style[style_name] = style_value;
            }
        }, false);
    }

    searchWindowEvents() {
        for (const event in this.element_dict[EVENTS]) {
            if (WINDOW_EVENTS.includes(event)) {
                this.window_events_list.push(event);
            }
        }
    }

    run() {
        this.searchWindowEvents();
        for (const event of this.window_events_list) {
            var event_type = this.element_dict[EVENTS][event];
            for (const type in event_type) {
                if (type == STYLE){
                    var style_dict = event_type[type];
                    for(const style_name in style_dict){
                        var style_value = style_dict[style_name];
                        this.createStyleEvent(event, style_name, style_value);
                    }
                }
            }
        }
    }
}

function getElementHeight(element) {
    if (element) {
        var height = window.getComputedStyle(element).getPropertyValue("height");
        if (height) {
            return height;
        }
        console.error(`${element.id}: cannot get the element height`);
    }
    console.error('invalid input')
    return null
}



export {
    elementCreator,
    getElementHeight,
    windowEventCreator,
    loadstaticHtmltoMain,
};