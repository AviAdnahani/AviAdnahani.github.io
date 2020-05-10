# Single Page Web Application
### Introduction
Responsive single page web application following MVC design pattern. wrote using HTML5, CSS3 and JavaScript. the core infrastructure are based on an internal objects that holds the HTML, CSS and EVENTS components, 
This object are sent to a main function that creates and appendes the element with all his components. the MVC are implemented as follow:
- **View** - files contaning the internal objects.
- **Model** - files contaning the metadata of the object (to mock fetched data from DB).
- **Controller** - files contaning the functions that takes the internal object and the metadata and creates elements and events.

### Files Tree (main files)
|--- model/ <br />
|------ consts.js <br />
|--- view/ <br />
|------ view_footer.js <br />
|------ view_head.js <br />
|------ view_header.js <br />
|------ view_main.js <br />
|--- controller/ <br />
|------ events/ <br />
|-------- events_load.js <br />
|-------- events_main.js <br />
|------ functions/ <br />
|-------- element_creators.js <br /> (the main function)
|-------- functions_global.js <br />
|-------- table_creator.js <br />
|--- run.js <br />
