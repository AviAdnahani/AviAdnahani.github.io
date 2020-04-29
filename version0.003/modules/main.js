
function addContentToMain(){
    var table = document.createElement("table"); // the table
    var thead = document.createElement("thead"); // the column
    var tbody = document.createElement("tbody"); // the body

    var tr1 = document.createElement("tr"); // row
    var tr2 = document.createElement("tr"); // row

    var th1 = document.createElement("th"); // column cell
    var th2 = document.createElement("th"); // column cell
    var th3 = document.createElement("th"); // column cell

    var td11 = document.createElement("td"); // row 1 cell
    var td12 = document.createElement("td"); // row 1 cell
    var td13 = document.createElement("td"); // row 1 cell

    var td21 = document.createElement("td"); // row 2 cell
    var td22 = document.createElement("td"); // row 2 cell
    var td23 = document.createElement("td"); // row 2 cell
    
    th3.innerHTML = "column3"; // column cell 3 title
    th2.innerHTML = "column2"; // column cell 2 title
    th1.innerHTML = "column1"; // column cell 1 title

    thead.appendChild(th1); // add column to head
    thead.appendChild(th2); // add column to head
    thead.appendChild(th3); // add column to head
    
    td11.innerHTML="row11"; // add cell data to row
    td12.innerHTML="row12"; // add cell data to row
    td13.innerHTML="row13"; // add cell data to row

    td21.innerHTML="row21"; // add cell data to row
    td22.innerHTML="row22"; // add cell data to row
    td23.innerHTML="row23"; // add cell data to row

    tr1.appendChild(td21); // add cell to row
    tr1.appendChild(td22); // add cell to row
    tr1.appendChild(td23); // add cell to row

    tr2.appendChild(td11); // add cell to row
    tr2.appendChild(td12); // add cell to row
    tr2.appendChild(td13); // add cell to row
    
    tbody.appendChild(tr2); // add row to body
    tbody.appendChild(tr1); // add row to body

    table.appendChild(tbody); // add body
    table.appendChild(thead); // add head

    var main = document.getElementsByTagName('main');
    if (this.id == 'introduction') {
        main[0].appendChild(table);
    }
    else
    {
        main[0].innerHTML = this.id;
    }
};

function createMain() {
    var main = document.createElement('main');
    var body = document.getElementsByTagName("body")[0]; 
    body.insertBefore(main, body.childNodes[0]);
}

function addEvenListenToMainHight() {
    window.addEventListener('load', function() {
        FixMainTop();
    });
    
    window.addEventListener('resize', function() {
        FixMainTop();
    });  
}

function FixMainTop(){
    var header = document.getElementsByTagName('header')[0];
    var elements = document.getElementsByTagName("main")[0];
    var height_header = window.getComputedStyle(header).getPropertyValue("height");
    elements.style.marginTop = height_header;
}

export { addContentToMain, createMain, addEvenListenToMainHight };