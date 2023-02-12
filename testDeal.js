let valeurRech = "";
document.getElementById("start").addEventListener("click", function attendClick(){
    valeurRech = document.getElementById("recherche").value;
    browser.storage.local.set({data: valeurRech});
    browser.tabs.create({
        url:"https://www.dealabs.com/",
    });
    window.close();
});