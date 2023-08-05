
function startLoading() {
    const progressBar = document.getElementById("progress");
    let width = 0;
    
    const loadingInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(loadingInterval);
            window.location = '/cool'
        } else {
            width += 1;
            progressBar.style.width = width + "%";
        }
    }, 20);
}
