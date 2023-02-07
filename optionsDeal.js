function premPage(formu){
    let valid = formu.item(0);
    let elems = document.getElementsByName("q");
    elems.item(0).value = "pc portables";
    valid.submit();
}
function apresRech(groupes){
    console.log(groupes);
    console.log(groupes.length);
    for(let obj of groupes){
        if(obj.title.toLowerCase() == "pc portables".toLowerCase()){
            window.location.replace(obj.href);
        }
    }
}
if(window.location.href === "https://www.dealabs.com/"){
    const observer = new MutationObserver(function (mutations, mutationInstance){
        const formu = document.getElementsByTagName("form");
        if(formu){
            premPage(formu);
            mutationInstance.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
}
else if(window.location.href.indexOf("search?q=") != -1){
    const observer = new MutationObserver(function (mutations, mutationInstance){
        const groupes = document.getElementsByClassName("button button--type-tag button--shape-rounded button--mode-light");
        if(groupes.length > 0){
            apresRech(groupes);
            mutationInstance.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
}