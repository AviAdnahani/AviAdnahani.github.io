import {TAG, WEBSITE_COLORS} from '../../model/000_consts.js';
import { getHeaderHeight, getFooterHeight } from '../events/events_main.js';

const SIZE_TITLE = "5vh";
const SIZE_MINI_TITLE = "3vh";
const SIZE_LEFT_TITLE = "2vh";
const SIZE_CONTANT = "3vh";

class tableCreator {
    #TDATA = null;
    #ROWS = 0;
    #COLMNS = 0;

    constructor(table_data) {
        this.TDATA = table_data;
        this.ROWS = this.TDATA.length;
        this.COLMNS = this.TDATA[0].length;
    }

    run(){
        let table = document.createElement(TAG.TABLE);
        table.style.width = "100%";
        // table.style.background = "blue";
        table.style.borderCollapse = "collapse";
        let thead = document.createElement(TAG.THEAD);
        let tbody = document.createElement(TAG.TBODY);
        for(var r=0; r<this.ROWS; r++){
            let tr = document.createElement(TAG.TR);
            tr.setAttribute('id', `r${r}`);
            var tag = TAG.TD;
            for(var c=0; c<this.COLMNS; c++){
                if (r%2==0) tag = TAG.TH;
                const td_or_th = document.createElement(tag);
                this.styleCell(td_or_th, r, c);
                this.setCellAttr(td_or_th, r, c);
                tr.appendChild(td_or_th) 
            }
            if (r==0) {
                thead.appendChild(tr);
                table.appendChild(thead);
            }
            else {
                tbody.appendChild(tr);
            }
        }
        table.appendChild(tbody);
        return table;
    }

    styleCell(cell, row, column){
        cell.style.padding = "1%";
        if (column==0 | column==2) {
            cell.style.color = WEBSITE_COLORS.ORANGE_DARK;
            cell.style.width = "10%";
            cell.style.fontSize = SIZE_LEFT_TITLE;
            
        }
        else{
            
        }
        if (column==1){
            cell.style.width = "80%";
            cell.style.textAlign = "left";

        }
        if (column==1 & row%2==0) {
            
            const main_title = document.createElement(TAG.DIV);
            main_title.innerHTML = this.TDATA[row][column][0];
            main_title.style.fontSize = SIZE_TITLE;
            main_title.style.color = WEBSITE_COLORS.GREEN_DARK;
            
            const small_title = document.createElement(TAG.DIV);
            small_title.style.color = WEBSITE_COLORS.GREEN_LIGHT;
            small_title.style.fontSize = SIZE_MINI_TITLE;
            small_title.innerHTML = this.TDATA[row][column][1];

            cell.appendChild(main_title);
            cell.appendChild(small_title);
        }
        if (row%2==0){
            cell.style.background = WEBSITE_COLORS.GREEN_WHITE;
            cell.style.position = "sticky";
            cell.style.top = getHeaderHeight();
        }
        else{
            cell.style.fontSize = SIZE_CONTANT;
        }
    }

    setCellAttr(cell, row, column){
        if (!(column==1 & row%2==0)) {
            cell.innerHTML = this.TDATA[row][column];
        }
        cell.setAttribute('id', `c${row}${column}`);
    }


}

export {tableCreator}