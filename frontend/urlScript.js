const urlInput = document.getElementById('urlInput');
const shortenBtn = document.getElementById('shortenBtn');
const result = document.getElementById('result');

shortenBtn.addEventListener('click', async () => {
    const originalUrl = urlInput.value.trim();
    localStorage.setItem('originalUrl', originalUrl);

    const response = await fetch('http://localhost:6975/api/url/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            originalUrl
        })
    });

    const data = await response.json();
    localStorage.setItem('shortUrl', data.shortUrl);

    result.innerHTML = `
    <a href="${data.shortUrl}" target="_blank" class="short-link">
        ${data.shortUrl}
    </a>`;
});

window.addEventListener('DOMContentLoaded', () => {
    const savedInput = localStorage.getItem('originalUrl');
    const savedShortUrl = localStorage.getItem('shortUrl');

    if(savedInput)
        urlInput.value = savedInput;

    if(savedShortUrl)
    {
        result.innerHTML = `
            <a href="${savedShortUrl}" target="_blank" class="short-link">
                ${savedShortUrl}
            </a>
        `;
    }
});