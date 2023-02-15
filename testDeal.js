let valeurRech = "";
let prixRech = 0;
document.addEventListener("DOMContentLoaded", function(){
    browser.storage.local.get("data", function(donnee){
        if(donnee.data != undefined){
            document.getElementById("rechercheA").value = donnee.data;
        }
    });
    browser.storage.local.get("alt", function(donnee){
        if(donnee.alt != undefined){
            document.getElementById("rechercheP").value = donnee.alt;
        }
    });
});

document.getElementById("start").addEventListener("click", function attendClick(){
    valeurRech = document.getElementById("rechercheA").value;
    prixRech = document.getElementById("rechercheP").value;
    browser.storage.local.set({data: valeurRech});
    browser.storage.local.set({alt: prixRech});
    browser.tabs.create({
        url:"https://www.dealabs.com/",
    });
    window.close();
});