table = document.getElementById('table_');

function sortTable(spanId, columnIdNum, mode) {
    rows = table.rows;

    if (mode != '⭡') {
        for (let i = 1; i < rows.length - 1; ++i) {
            for (let j = i + 1; j < rows.length; ++j) {
                var item1 = rows[i].getElementsByTagName('td')[columnIdNum];
                var item2 = rows[j].getElementsByTagName('td')[columnIdNum];

                if (item1.innerHTML.toLowerCase() > item2.innerHTML.toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }
    } else {
        for (let i = 1; i < rows.length - 1; ++i) {
            for (let j = i + 1; j < rows.length; ++j) {
                var item1 = rows[i].getElementsByTagName('td')[columnIdNum];
                var item2 = rows[j].getElementsByTagName('td')[columnIdNum];

                if (item1.innerHTML.toLowerCase() < item2.innerHTML.toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }
    }

    spanList = rows[0].getElementsByTagName('span');
    
    for (let i = 0; i < spanList.length; ++i) {
        if (spanList[i].id != spanId) {
            spanList[i].innerHTML = '⭥';
            spanList[i].style.color = 'black';
            spanList[i].style.backgroundColor = '';
        }
    }
    
    spanObject = document.getElementById(spanId);
    if (spanObject.innerHTML != '⭡') {
        spanObject.innerHTML = '⭡';
        spanObject.style.color = 'red';
        spanObject.style.backgroundColor = 'yellow';
    } else {
        spanObject.innerHTML = '⭣';
        spanObject.style.color = 'red';
        spanObject.style.backgroundColor = 'yellow';
    }

    for (let i = 1; i < rows.length; ++i) {
        rows[i].getElementsByTagName('td')[0].innerHTML = i;
    }
}