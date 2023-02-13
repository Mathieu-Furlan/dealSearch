let valeurRech = "";
document.addEventListener("DOMContentLoaded", function(){
    browser.storage.local.get("data", function(donnee){
        if(donnee.data != undefined){
            document.getElementById("recherche").value = donnee.data;
        }
    });
});

document.getElementById("start").addEventListener("click", function attendClick(){
    valeurRech = document.getElementById("recherche").value;
    browser.storage.local.set({data: valeurRech});
    browser.tabs.create({
        url:"https://www.dealabs.com/",
    });
    window.close();
});