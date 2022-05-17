document.addEventListener('yt-navigate-start', process);

if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);

function process() { 
    if (!location.pathname.startsWith('/shorts')) {
        return;
    }
    let host = 'https://www.youtube.com/watch?v='
    document.location.href = host + document.location.href.split('shorts/')[1]
}