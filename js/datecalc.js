window.addEventListener("load", () => {
    const currYear = new Date().getFullYear();
    document.getElementById("copyright").innerText = "©" + currYear;
});