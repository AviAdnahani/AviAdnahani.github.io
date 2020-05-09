import { ID, PROPERTICE} from '../../model/000_consts.js';

var WINDOW_EVENTS = ["resize", "load"];
var INNER_HTML = PROPERTICE.INNER_HTML;
var ELEMENT = PROPERTICE.ELEMENT;
var _ID = "id";
var PERENT_ID = PROPERTICE.PERENT_ID;
var STYLE = PROPERTICE.STYLE;
var ATTRIBUTS = PROPERTICE.ATTRIBUTS;
var EVENTS = PROPERTICE.EVENTS;
var FUNCTIONS = PROPERTICE.FUNCTIONS;
var ID_BODY = ID.BODY;

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
    #perent_element = null;
    #return_new_element=false;
    
    constructor(source_dict, perent_element=null, return_new_element=false) {
        this.SOURCE_DICT = source_dict;
        this.perent_element = perent_element;
        this.return_new_element = return_new_element;
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
            if (this.testExistence(_ID, this.SOURCE_DICT[ATTRIBUTS])) {
                return true;
            }
        }
        return false;
    }

    createNewElement() {
        this.new_element = document.createElement(this.new_element_tag);
    }

    appendNewElementToPerant() {
        // append child to perant
        var perant;
        if(this.perent_element){
            perant = this.perent_element;
        }
        else{
            perant = document.getElementById(this.perant_id); 
        }
        if (this.perant_id == ID_BODY) {
            perant.insertBefore(this.new_element, perant.childNodes[0]);
        }
        else {
            perant.appendChild(this.new_element);
        }
        return perant;
    }
    
    setElementAttributes() {
        for (const attributes in this.attributes_dict) {
            this.new_element.setAttribute(attributes, this.attributes_dict[attributes]);
        }
    }

    setStyle() {
        var s = new styleCreator(this.new_element, this.style_dict)
        this.new_element = s.run();
    }

    setEvents() {
        var e = new eventCreator(this.new_element, this.events_dict)
        this.new_element = e.run();
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
            if(this.return_new_element) return this.new_element;
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
    #ELEMENT = null;
    #EVENT_DICT = null;
    constructor(element, event_dict) {
        this.ELEMENT = element;
        this.EVENT_DICT = event_dict;
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

    setEvents() {
        for (const event_name in this.EVENT_DICT) {    
            var new_event_dict = this.EVENT_DICT[event_name];
            if (this.testExistence(STYLE, new_event_dict) & !WINDOW_EVENTS.includes(event_name)){
                var new_style_dict = new_event_dict[STYLE];
                for (const style_name in new_style_dict){
                    const style_value = new_style_dict[style_name];
                        this.ELEMENT.addEventListener(event_name, function(event) {
                            if (style_value && {}.toString.call(style_value) === '[object Function]') {
                                event.target.style[style_name] = style_value();
                            }
                            else {
                                event.target.style[style_name] = style_value;
                            }
                        }, false);
                }
            }
            if (this.testExistence(FUNCTIONS, new_event_dict)){
                var func_list = new_event_dict[FUNCTIONS];
                for (const func of func_list) {
                    this.ELEMENT.addEventListener(event_name, function() {
                        func(event.target);             
                    }, false);
                }
            }
        }
    }

    run(){
        this.setEvents();
        return this.ELEMENT;
    }

}

class styleCreator {
    /**
     * gets element and event dict
     */
    #ELEMENT = null;
    #STYLE_DICT = null;
    constructor(element, style_dict) {
        this.ELEMENT = element;
        this.STYLE_DICT = style_dict;
    }

    setStyle() {
        for (const style_name in this.STYLE_DICT) {
            const style_value = this.STYLE_DICT[style_name];
            this.ELEMENT.style[style_name] = style_value;
        }
    }

    run(){
        this.setStyle();
        return this.ELEMENT;
    }

}

class windowEventCreator {
    #element_dict
    #element_id
    #window_events_list

    constructor(element_dict) {
        this.element_dict = element_dict;
        this.element_id = this.element_dict[ATTRIBUTS][_ID];
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

function ElementCreatorRunner(ELEMENTS_ARRAY) {
    for (const DICT of ELEMENTS_ARRAY) {
        const ELEMENT = new elementCreator(DICT);
        if (ELEMENT){
            ELEMENT.run(); // create element
            const EVENT = new windowEventCreator(DICT);
            EVENT.run(); // create window event (if exists)
        }
        else {
            console.log(`could not create ${DICT} element`)
        }   
    }
    for (const DICT of ELEMENTS_ARRAY) {
        const EVENT = new windowEventCreator(DICT);
        EVENT.run();
    }
}

export {
    elementCreator,
    windowEventCreator,
    ElementCreatorRunner
};