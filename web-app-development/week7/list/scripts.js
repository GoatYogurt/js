var allCheckbox = document.getElementById('check-all-box');

var firstCheckbox = document.getElementById('check-box-1');
var secondCheckbox = document.getElementById('check-box-2');
var thirdCheckbox = document.getElementById('check-box-3');
var fourthCheckbox = document.getElementById('check-box-4');
var fifthCheckbox = document.getElementById('check-box-5');

var firstRow = document.getElementById('first-row');
var secondRow = document.getElementById('second-row');
var thirdRow = document.getElementById('third-row');
var fourthRow = document.getElementById('fourth-row');
var fifthRow = document.getElementById('fifth-row');

function checkedRow(rowNumber) {
    switch (rowNumber) {
        case 1:
            if (firstCheckbox.checked) {
                firstRow.style = 'background-color: yellow;'
            } else {
                firstRow.style = 'background-color: lightgray;'
            }
            break;
        case 2:
            if (secondCheckbox.checked) {
                secondRow.style = 'background-color: yellow;'
            } else {
                secondRow.style = 'background-color: aliceblue;'
            }
            break;
        case 3:
            if (thirdCheckbox.checked) {
                thirdRow.style = 'background-color: yellow;'
            } else {
                thirdRow.style = 'background-color: lightgray;'
            }
            break;
        case 4:
            if (fourthCheckbox.checked) {
                fourthRow.style = 'background-color: yellow;'
            } else {
                fourthRow.style = 'background-color: aliceblue;'
            }
            break;
        case 5:
            if (fifthCheckbox.checked) {
                fifthRow.style = 'background-color: yellow;'
            } else {
                fifthRow.style = 'background-color: lightgray;'
            }
            break;
        default:
            break;
    }
}

allCheckbox.addEventListener('change', () => {
    if (allCheckbox.checked) {
        firstCheckbox.checked = true;
        secondCheckbox.checked = true;
        thirdCheckbox.checked = true;
        fourthCheckbox.checked = true;
        fifthCheckbox.checked = true;
    } else {
        firstCheckbox.checked = false;
        secondCheckbox.checked = false;
        thirdCheckbox.checked = false;
        fourthCheckbox.checked = false;
        fifthCheckbox.checked = false;
    }
})

firstCheckbox.addEventListener("change", checkAll);
secondCheckbox.addEventListener("change", checkAll);
thirdCheckbox.addEventListener("change", checkAll);
fourthCheckbox.addEventListener("change", checkAll);
fifthCheckbox.addEventListener("change", checkAll);

function checkAll() {
    if (firstCheckbox.checked && secondCheckbox.checked && thirdCheckbox.checked && fourthCheckbox.checked && fifthCheckbox.checked) {
        allCheckbox.checked = true;
    } else {
        allCheckbox.checked = false;
    }
}

function checkBox(rowNumber) {
    switch (rowNumber) {
      case 1:
        firstCheckbox.checked = !firstCheckbox.checked;
        break;
      case 2:
        secondCheckbox.checked = !secondCheckbox.checked;
        break;
      case 3:
        thirdCheckbox.checked = !thirdCheckbox.checked;
        break;
      case 4:
        fourthCheckbox.checked = !fourthCheckbox.checked;
        break;
      case 5:
        fifthCheckbox.checked = !fifthCheckbox.checked;
        break;
      default:
        break;
    }
  }