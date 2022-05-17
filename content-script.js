document.addEventListener('yt-navigate-start', process);

if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);

function process() {
    if (!location.pathname.startsWith('/shorts')) {
        return;
    }
    var curloc = document.location.href.split('shorts/'); 
    var urlEnding = curloc[1]; 
    curloc = 'https://www.youtube.com/watch?v='+urlEnding;
    document.location.href = curloc;
}