function premPage(formu, valeurArticle){
    let valid = formu.item(0);
    let elems = document.getElementsByName("q");
    elems.item(0).value = valeurArticle.toString();
    valid.submit();
}
function apresRech(groupes, valeurArticle){
    for(let obj of groupes){
        if(obj.title.toLowerCase() == valeurArticle.toString().toLowerCase()){
            window.location.replace(obj.href);
        }
        else{
            const observer = new MutationObserver(function (mutations, mutationInstance){
                const posts = document.getElementsByClassName("thread-price");
                if(posts.length > 10){
                    creerPage(posts);
                    mutationInstance.disconnect();
                }
            });
        
            observer.observe(document, {
                childList: true,
                subtree: true
            });
        }
    }
}
function creerPage(posts){
    console.log(posts);
    console.log(posts.length);
    let suppr = null;
    for(let post of posts){
        let ajo = parseInt(post.innerHTML, 10);
        console.log(ajo);
        browser.storage.local.get("alt", function(donnee){
            if(ajo > donnee.alt){
                suppr = post.closest("article");
                suppr.remove();
            }
        });
    }
}
if(window.location.href === "https://www.dealabs.com/"){
    let valeurArticle = null;
    browser.storage.local.get("data", function(donnee){
        valeurArticle = donnee.data;
    });
    const observer = new MutationObserver(function (mutations, mutationInstance){
        const formu = document.getElementsByTagName("form");
        if(formu){
            premPage(formu, valeurArticle);
            mutationInstance.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
}
else if(window.location.href.indexOf("search?q=") != -1){
    let valeurArticle = null;
    browser.storage.local.get("data", function(donnee){
        valeurArticle = donnee.data;
    });
    const observer = new MutationObserver(function (mutations, mutationInstance){
        const groupes = document.getElementsByClassName("button button--type-tag button--mode-light");
        if(groupes.length > 0){
            apresRech(groupes, valeurArticle);
            mutationInstance.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
}
else if(window.location.href.indexOf("groupe") != -1){
    const observer = new MutationObserver(function (mutations, mutationInstance){
        const posts = document.getElementsByClassName("thread-price");
        if(posts.length > 10){
            creerPage(posts);
            mutationInstance.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
}