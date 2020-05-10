import {PROPERTICE_TABLE_DATA} from './consts.js';

const text = `
<h3 id="introduction">Introduction</h3> 
<p>Responsive single page web application following MVC design pattern. wrote using HTML5, CSS3 and JavaScript. the core infrastructure are based on an internal objects that holds the HTML, CSS and EVENTS components, 
This object are sent to a main function that creates and appendes the element with all his components. the MVC are implemented as follow:</p>
<ul>
<li><strong>View</strong> - files contaning the internal objects.</li>
<li><strong>Model</strong> - files contaning the metadata of the object (to mock fetched data from DB).</li>
<li><strong>Controller</strong> - files contaning the functions that takes the internal object and the metadata and creates elements and events.</li>
</ul>
<h3 id="files-tree-main-files-">Files Tree (main files)</h3>
<p>|--- model/ <br />
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
|-------- element_creators.js <em>(the main function)</em> <br /> 
|-------- functions_global.js <br />
|-------- table_creator.js <br />
|--- run.js <br /></p>
<a href="https://github.com/AviAdnahani/AviAdnahani.github.io">Checkout this project on GitHub</a>
`

const EMPTY = '';

const PORTFOLIO_MAIN_CONTENT = `${text}`;
const PORTFOLIO = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: 'Apr<br>2020',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Portfolio',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'Single Page, MVC pattern web app',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: PORTFOLIO_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const BUILD3DMODEL_MAIN_CONTENT = `${text}`;
const BUILD3DMODEL = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: 'Jan<br>2020',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Build 3D Model',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'Converting 2D object to 3D obj',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: BUILD3DMODEL_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const IMAGEORGANIZER_MAIN_CONTENT = `${text}`;
const IMAGEORGANIZER = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: 'Jun<br>2019',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'Image Organizer',
            [PROPERTICE_TABLE_DATA.MINI_TITLE]: 'Bash script that...',
        },
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    },
    [PROPERTICE_TABLE_DATA.ROW2]: {
        [PROPERTICE_TABLE_DATA.CELL1]: EMPTY,
        [PROPERTICE_TABLE_DATA.CELL2]: IMAGEORGANIZER_MAIN_CONTENT,
        [PROPERTICE_TABLE_DATA.CELL3]: EMPTY,
    }
}

const PROJECT_DATA = {
    'PORTFOLIO': PORTFOLIO,
    // 'BUILD3DMODEL': BUILD3DMODEL,
    // 'IMAGEORGANIZER': IMAGEORGANIZER,
};

export { PROJECT_DATA };