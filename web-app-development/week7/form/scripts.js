function moveToAddress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('address-input').focus();
    }
}

function moveToDOB(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('dob-input').focus();
    }
}

function moveToEmail(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('email-input').focus();
    }
}

function moveToTel(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('tel-input').focus();
    }
}

function moveToUsername(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('username-input').focus();
    }
}

function moveToPassword(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('password-input').focus();
    }
}

function moveToRepassword(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('repassword-input').focus();
    }
}

function moveToNote(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('note-input').focus();
    }
}

document.getElementById('name-input').addEventListener('blur', () => {
    var nameInput = String(document.getElementById('name-input').value).trim();
    while (nameInput.includes('  ')) {
        nameInput = nameInput.replace('  ', ' ');
    }
    var words = nameInput.split(' ');
    nameInput = '';
    for (let i = 0; i < words.length; ++i) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        nameInput += words[i] + ' ';
    }
    document.getElementById('name-input').value = nameInput.trim();
})

document.getElementById('email-input').addEventListener('blur', () => {
    const EMAIL_REGEX = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!EMAIL_REGEX.test(document.getElementById('email-input').value)) {
        document.getElementById('invalid-email').innerHTML = 'Invalid email!';
    } else {
        document.getElementById('invalid-email').innerHTML = '';
    }
})

document.getElementById('dob-input').addEventListener('blur', () => {
    var dateInput = String(document.getElementById('dob-input').value);
    if (RegExp(/^\d{2}\/\d{2}\/\d{4}$/).test(dateInput)) {
        return;
    }
    
    if (dateInput === '') {
        return;
    }

    var day = parseInt(dateInput.slice(0, 2));
    var month = parseInt(dateInput.slice(2, 4));
    var year = parseInt(dateInput.slice(4));
    document.getElementById('dob-input').value = day + '/' + month + '/' + year;
})

document.getElementById('repassword-input').addEventListener('keyup', () => {
    var password = document.getElementById('password-input').value;
    if (document.getElementById('repassword-input').value != password) {
        document.getElementById('unmatch-password').innerHTML = 'Passwords do not match!';
    } else {
        document.getElementById('unmatch-password').innerHTML = '';
    }
})

document.getElementById('accept').addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('name-input').value === '') {
        document.getElementById('name-blank').innerHTML = 'This field must not be blank!';
    }

    if (!document.getElementById('male-radio-option').checked && !document.getElementById('female-radio-option').checked) {
        document.getElementById('gender-blank').innerHTML = 'This field must not be blank!';
    }

    if (document.getElementById('dob-input').value === '') {
        document.getElementById('dob-blank').innerHTML = 'This field must not be blank!';
    }

    if (document.getElementById('email-input').value === '') {
        document.getElementById('invalid-email').innerHTML = 'This field must not be blank!';
    }

    if (!document.getElementById('checkbox-option-1').checked && !document.getElementById('checkbox-option-2').checked && !document.getElementById('checkbox-option-3').checked) {
        document.getElementById('courses-blank').innerHTML = 'This field must not be blank!';
    }

    if (document.getElementById('username-input').value === '') {
        document.getElementById('username-blank').innerHTML = 'This field must not be blank!';
    }
})