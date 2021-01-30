const code_version="1.0";

window.onload=()=>{
    //register the serviceworker
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./js_minigames_public/sw.js');
    };

    //display the current code version
    console.log("Site version: " + code_version);
}