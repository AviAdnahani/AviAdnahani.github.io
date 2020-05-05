import { 
    INNER_HTML, ID_BODY,
} from '../modules/000_consts.js'

var ELEMENT = "element";
var ID = "id";
var PERENT_ID = "perent_id";
var STYLE = "style";
var ATTRIBUTS = "attributs";
var EVENTS = "events";

/**
 * tests missing: perant element existence
 */
class elementCreator_class {

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
                    this.new_element.addEventListener(event_name, function(event) {
                        event.target.style[style_name] = style_value;
                    }, false);
                }
            }
        }
    }

    setInnerHtml() {
        this.new_element.innerHTML = this.SOURCE_DICT[INNER_HTML];
    }

    creatElementP() {
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

    addMetaDataToElement() {
        for (const temp in this.TEMPLATE) {
            let new_element_template = this.new_element.cloneNode(true);
            let temp_dict = this.TEMPLATE[temp];
            if(this.testExistence(PERENT_ID, temp_dict)) this.perant_id = temp_dict[PERENT_ID];
            if(this.testExistence(ATTRIBUTS, temp_dict)) this.setElementAttributes(temp_dict, new_element_template);
            if(this.testExistence(STYLE, temp_dict)) this.setStyle(temp_dict, new_element_template);
            // if(this.testExistence(EVENTS, temp_dict)) this.setEvents(temp_dict, new_element_template);
            if(this.testExistence(INNER_HTML, temp_dict)) this.setInnerHtml(temp_dict, new_element_template);
            this.appendNewElementToPerant(new_element_template);
        }
        return true;
    }
}

export {
    elementCreator_class
};