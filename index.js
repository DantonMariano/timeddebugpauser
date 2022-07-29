let buttonPause = document.getElementById("buttonPause");
let formPause = document.getElementById("formPause")

formPause.addEventListener("submit", (event) => {
    event.preventDefault();
    let secondsNode = document.getElementById("secondsPause");
    chrome.tabs.query({ active: true, currentWindow: true }).then((tab) => {
        chrome.scripting.executeScript({
            target: {tabId: tab[0].id},
            func: pauseFor,
            args: [secondsNode.value]
        },()=>{})
    });
});

function pauseFor(seconds) {
    alert("Pausing in "+ (seconds) +" seconds, Don't forget to open Dev tools");
    setTimeout(()=>{debugger;}, seconds * 1000);
}