var xhr = new XMLHttpRequest();
const table = document.getElementById('table_');

xhr.open('GET', 'https://itest.com.vn/lects/webappdev/json/data/', true);
xhr.send();
xhr.onreadystatechange = function () {
    var objectList = [];
    if (xhr.readyState === 4) {
        objectList = JSON.parse(xhr.responseText);        
    }

    for (let i = 0; i < objectList.length; ++i) {        
        const row = table.insertRow(-1);

        const nameCell = row.insertCell(0);
        nameCell.textContent = objectList[i]['name'];

        const ageCell = row.insertCell(1);
        ageCell.textContent = objectList[i]['age'];

        const quantityCell = row.insertCell(2);
        quantityCell.textContent = objectList[i]['cars'].length;

        const carCell = row.insertCell(3);
        carList = objectList[i]['cars'];
        for (let j = 0; j < carList.length; ++j) {          
            carCell.innerHTML += carList[j]['name'] + ' - ' + carList[j]['models'] + '<br>';
        }        
    }
}

