const form = document.querySelector('form');
const input = document.querySelector('#input');
const inputContainer = document.querySelector('#input-container');
const notice = document.querySelector('#notice');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    notice.innerHTML = '';

    const noticeContent = document.createElement('p');
    noticeContent.innerHTML = 'Please provide a valid email address';

    const emailAddressValue = input.value;
    if (!validate(emailAddressValue)) {
        input.style.borderColor = 'red';
        notice.appendChild(noticeContent);
        console.log('invalid email address');
    }

    if (validate(emailAddressValue)) {
        input.style.borderColor = 'hsl(223, 100%, 88%)';
        console.log('valid email address');
    }
})

function validate(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}