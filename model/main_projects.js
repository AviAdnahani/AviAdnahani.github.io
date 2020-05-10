import {PROPERTICE_TABLE_DATA} from './consts.js';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex sem, vulputate in leo vitae, pharetra laoreet elit. Maecenas condimentum tellus a tellus tincidunt ornare. Sed sed eleifend lectus. Cras id vestibulum augue, non maximus nulla. Suspendisse elit justo, semper at viverra ut, tempus eget lorem. Vivamus posuere fermentum gravida. Pellentesque vitae erat arcu. Curabitur et lobortis nisi, sit amet auctor augue. Integer tincidunt, purus nec rhoncus maximus, risus justo venenatis nisl, at euismod est risus vitae nunc. Proin pretium nunc vel ipsum pharetra accumsan. Phasellus vitae augue pulvinar, ornare leo vitae, aliquet tellus. Etiam vitae tincidunt nisi. Proin et diam semper, consectetur arcu at, tincidunt magna. Etiam vestibulum a velit non congue.'

const EMPTY = '';

const PORTFOLIO_MAIN_CONTENT = `${text}`;
const PORTFOLIO = {
    [PROPERTICE_TABLE_DATA.ROW1]: {
        [PROPERTICE_TABLE_DATA.CELL1]: 'Apr<br>2020',
        [PROPERTICE_TABLE_DATA.CELL2]: {
            [PROPERTICE_TABLE_DATA.MAIN_TITLE]: 'portfolio',
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
    'BUILD3DMODEL': BUILD3DMODEL,
    'IMAGEORGANIZER': IMAGEORGANIZER,
};

export { PROJECT_DATA };