const code_version="1.0";

//display the current code version
console.log("Site version: " + code_version);

//register the serviceworker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};
