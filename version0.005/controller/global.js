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
    #new_element_template = null;
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
            return false;
        }
        if (this.SOURCE_DICT.hasOwnProperty(STYLE)) {
            this.style_dict = this.SOURCE_DICT[STYLE];
        }
        if (this.SOURCE_DICT.hasOwnProperty(INNER_HTML)) {
            this.innerhtml = this.SOURCE_DICT[INNER_HTML];
        }
        if (this.SOURCE_DICT.hasOwnProperty(EVENTS)) {
            this.events_dict = this.SOURCE_DICT[EVENTS];
        }
        return true;
    }

    setPriviteTemplate() {
        if (this.testRequriedKeysTemplete()) {
            this.new_element_tag = this.SOURCE_DICT[ELEMENT];
            
        }
        else {
            return false;
        }
        if (this.SOURCE_DICT.hasOwnProperty(PERENT_ID)) {
            this.perant_id = this.SOURCE_DICT[PERENT_ID];
        }
        if (this.SOURCE_DICT.hasOwnProperty(ATTRIBUTS)) {
            this.attributes_dict = this.SOURCE_DICT[ATTRIBUTS];
        }
        if (this.SOURCE_DICT.hasOwnProperty(STYLE)) {
            this.style_dict = this.SOURCE_DICT[STYLE];
        }
        if (this.SOURCE_DICT.hasOwnProperty(INNER_HTML)) {
            this.innerhtml = this.SOURCE_DICT[INNER_HTML];
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

    testRequriedKeysTemplete() {
        return (this.testExistence(ELEMENT, this.SOURCE_DICT));
    }

    createNewElement() {
        this.new_element = document.createElement(this.new_element_tag);
    }

    appendNewElementToPerant(new_element_input=null) {
        // append child to perant
        var perant = document.getElementById(this.perant_id); 
        let new_element = this.setNotNull(this.new_element, new_element_input);
        if (this.perant_id == ID_BODY) {
            perant.insertBefore(new_element, perant.childNodes[0]);
        }
        else {
            perant.appendChild(new_element);
        }
        return true;
    }
    
    setElementAttributes(attributes_dict_input=null, new_element_input=null) {
        let new_element = this.setNotNull(this.new_element, new_element_input);
        let attr_dict = this.setInput(ATTRIBUTS, attributes_dict_input);
        for (const attributes in attr_dict) {
            new_element.setAttribute(attributes, attr_dict[attributes]);
        }
    }

    setStyle(style_dict_input = null, new_element_input=null) {
        let sty_dict = this.setInput(STYLE, style_dict_input);
        let new_element = this.setNotNull(this.new_element, new_element_input);
        for (const new_style in sty_dict) {
            new_element.style[new_style] = sty_dict[new_style];
        }
    }

    // setEvents(events_dict_input = null, new_element_input=null) {
    //     let eve_dict = this.setInput(EVENTS, events_dict_input);
    //     var new_element = this.setNotNull(this.new_element, new_element_input);
    //     for (const event_name in eve_dict) {    
    //         var new_event_dict = eve_dict[event_name];
    //         if (this.testExistence(STYLE, new_event_dict)){
    //             var new_style_dict = new_event_dict[STYLE];
    //             for (const style_name in new_style_dict){
    //                 const style_value = new_style_dict[style_name];
    //                 new_element.addEventListener(event_name, function(event) {
    //                     event.target.style[style_name] = style_value;
    //                 }, false);
    //             }
    //         }
    //     }
    // }

    setInnerHtml(SOURCE_DICT_INPUT = null, new_element_input=null) {
        let new_element = this.setNotNull(this.new_element, new_element_input);
        let inner = this.setInput(INNER_HTML, SOURCE_DICT_INPUT);
        new_element.innerHTML = inner;
    }

    creatElementP() {
        let template_flage;
        let status;
        if(!this.TEMPLATE) {
            status = this.setPrivite();
            template_flage = false;
        } else {
            status = this.setPriviteTemplate();
            template_flage = true;
        }
        if(status) {
            this.createNewElement();
            if(this.attributes_dict) this.setElementAttributes();
            if(this.style_dict) this.setStyle();
            // if(this.events_dict) this.setEvents();
            if(this.inner_html) this.setInnerHtml();
            if (template_flage) {
                return this.addMetaDataToElement();
            }
            else {
                return this.appendNewElementToPerant();
            }
        }
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

    setInput(attr, new_input=null) {
        if (!new_input) return this.SOURCE_DICT[attr];
        return new_input[attr];
    }

    setNotNull(obj1, obj2) {
        if (!obj2) return obj1;
        return obj2;
    }
}

export {
    elementCreator_class
};