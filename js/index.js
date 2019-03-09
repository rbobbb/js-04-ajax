document.querySelector('.page-loaded')
    .innerText = (new Date()).toLocaleTimeString();

document.querySelector('.ajax-get-html')
    .addEventListener('click', ajaxGetHtml);

function ajaxGetHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container')
                .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.ajax-get-json')
    .addEventListener('click', ajaxGetJson);

function ajaxGetJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.client-account').innerText = clientData.account;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}

document.querySelector('.fetch-get-html')
    .addEventListener('click', fetchGetHtml);

function fetchGetHtml() {
    fetch('client-data.html')
        .then(result => result.text())
        .then(html => document.querySelector('.html-container').innerHTML = html);
}

window.addEventListener('load', getCurrency);
document.querySelector('.update-currency')
    .addEventListener('click', getCurrency);

function getCurrency() {
    fetch('https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=ultra&apiKey=17147b48089fb0bfa529')
        .then(response => response.json())
        .then(currency => document.querySelector('.currency-container')
            .innerText = currency['USD_UAH']);
}

//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const currency = JSON.parse(xhr.responseText);
//             document.querySelector('.currency-container')
//              .innerText = currency['USD_UAH'];
//         }
//     }
//     xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=ultra&apiKey=17147b48089fb0bfa529', true);
//     xhr.send();
// }

document.querySelector('.login-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
            method: 'POST',
            body: new FormData(document.querySelector('.login-form'))
        })
        .then(response => response.text())
        .then(html => document.querySelector('.server-response')
            .innerHTML = html);
}