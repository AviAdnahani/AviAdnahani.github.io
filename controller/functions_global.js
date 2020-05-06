import { 
    INNER_HTML, ID_BODY,
} from '../model/000_consts.js'

import {
    getHeaderHeight,
    getFooterHeight,
} from './events_main.js';

var WINDOW_EVENTS = ["resize"]
var ELEMENT = "element";
var ID = "id";
var PERENT_ID = "perent_id";
var STYLE = "style";
var ATTRIBUTS = "attributs";
var EVENTS = "events";

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
};