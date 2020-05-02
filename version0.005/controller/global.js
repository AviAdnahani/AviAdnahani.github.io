import { 
    INNER_HTML,
} from '../modules/000_consts.js'

var ELEMENT = "element";
var ID = "id";
var PERENT_ID = "perent_id";
var STYLE = "style";
var ATTRIBUTS = "attributs";
var EVENTS = "events";


class elementCreator {

    #perant_id = null;
    #attributes_dict = null;
    #style_dict = null;
    #events_dict = null;
    #innerhtml = null;

    constructor(metadata) {
        this.SOURCE_DICT = metadata;
    }

    setPrivite() {
        if (this.testRequriedKeys()) {
            this.perant_id = this.SOURCE_DICT[PERENT_ID];
            this.attributes_dict = this.SOURCE_DICT[ATTRIBUTS];
        }
        if (this.SOURCE_DICT.hasOwnProperty(STYLE)) {
            this.style_dict = this.SOURCE_DICT[STYLE];
        }
        if (this.SOURCE_DICT.hasOwnProperty(EVENTS)) {
            this.events_dict = this.SOURCE_DICT[EVENTS];
        }
        if (this.SOURCE_DICT.hasOwnProperty(INNER_HTML)) {
            this.innerhtml = this.SOURCE_DICT[INNER_HTML];
        }
    }

    testRequriedKeys() {
        var test_key_1 = this.SOURCE.hasOwnProperty(ELEMENT);
        var test_key_2 = this.SOURCE.hasOwnProperty(PERENT_ID);
        var test_key_3 = this.SOURCE.hasOwnProperty(ATTRIBUTS);
        var test_all = test_key_1 & test_key_2  & test_key_3;
        if (test_all) {
            if (SOURCE[ATTRIBUTS].hasOwnProperty(ID)) {
                return true;
            }
        }
        return false;
    }



}







function elementCreator(SOURCE) {
    if (testRequriedKeys(SOURCE)) {
        var new_element = document.createElement(SOURCE[ELEMENT]);
  
        // set attributes
        addAtributes(new_element, SOURCE[ATTRIBUTS])


        // set style
        if (SOURCE.hasOwnProperty(STYLE)) {
            var new_style =  SOURCE[STYLE];
            for (const style_ in new_style) {
                new_element.style[style_] = new_style[style_];
            }
        }

        // set events
        if (SOURCE.hasOwnProperty(EVENTS)){
            var new_events = SOURCE[EVENTS];
            for (const event_ in new_events) {
                var event_dict = new_events[event_];
                if (event_dict.hasOwnProperty(STYLE)){
                    var style_dict = event_dict[STYLE];
                    for (const style_ in style_dict){
                        new_element.addEventListener(event_, function(event) {
                            event.target.style[style_] = style_dict[style_];
                        })
                    }
                }
            }
        }

        // set inner html
        if (SOURCE.hasOwnProperty(INNER_HTML)) {
            new_element.innerHtml = SOURCE[INNER_HTML];
        }

        // append child to perant
        var perant = document.getElementById(SOURCE[PERENT_ID]); 
        perant.insertBefore(new_element, perant.childNodes[0]);

        return true;
    }
    else {
        return false;
    }
}

function addAtributes(element, attribute_dict) {
    for (const attr in attribute_dict) {
        element.setAttribute(attr, attribute_dict[attr]);
    }
}


// function addToElement() {

// }

function testRequriedKeys(SOURCE) {
    var test_key_1 = SOURCE.hasOwnProperty(ELEMENT);
    var test_key_2 = SOURCE.hasOwnProperty(PERENT_ID);
    var test_key_3 = SOURCE.hasOwnProperty(ATTRIBUTS);
    var test_all = test_key_1 & test_key_2  & test_key_3;
    if (test_all) {
        if (SOURCE[ATTRIBUTS].hasOwnProperty(ID)) {
            return true;
        }
    }
    return false;
}

function setMetaDatawithTemplete(metadata, template) {
    return 1;
}

export {elementCreator};