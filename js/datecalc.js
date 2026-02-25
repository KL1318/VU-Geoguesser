window.addEventListener("load", () => {
    const currYear = new Date().getFullYear();
    document.getElementById("copyright").innerText = "©2026 - " + currYear;
});