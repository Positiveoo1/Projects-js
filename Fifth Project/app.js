const url = document.getElementById('inputVal');
const btn = document.getElementById('submit');
const result = document.getElementById('result');

const requestHeaders = {
    "Content-Type": "application/json",
    "apikey": "0d509fe8cc254c46a8fa9f846c53a12d",
    "workspace": "1ebb1350eb214664b99b3fa459f0969d"
}

const getShortLink = (event) => {
    event.preventDefault(); // Prevent form submission

    const linkRequest = {
        destination: url.value,
        domain: { fullName: "rebrand.ly" }
    }

    $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
        success: (link) => {
            result.innerHTML = `<a href="https://${link.shortUrl}" target="_blank">${link.shortUrl}</a>`;
        }
    });
}

const init = () => {
    btn.addEventListener("click", getShortLink);
}

window.onload = function() {
    init();
}
