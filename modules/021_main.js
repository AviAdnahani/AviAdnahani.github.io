import {
    ID_MAIN_BODY, 
    ID_PROJECT_TABLE,
    COLOR_GREEN_WHITE,
    TR, TH, TD
} from './000_consts.js'

const main_table = {
    element: TABLE,
    perent_id: ID_MAIN_BODY,
    attributs: {id: ID_PROJECT_TABLE},
    style: {
        width: "100%",
        textAlign: "left",
        position: "relative",
        borderColleapse: "collapse",
        borderSpacing: "0px",
        zIndex: "-1",
    },
}

const main_table_row_template = {
    element: TR,
    perent_id: ID_PROJECT_TABLE,
}

const main_table_row_cell_th_template = {
    element: TH,
    style: {
        backgroundColor: COLOR_GREEN_WHITE,
        position: "sticky",
    },
}

const main_table_row_cell_td_template = {
    element: TD,
    style: {
        fontSize: "3vw",
    },
}

