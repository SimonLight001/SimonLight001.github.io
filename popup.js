function checkPage(){
    //every time a page is opened
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
    });
    if(url.includes("lightspeed"))
    {
        changePage;
    }
}
function changePage(){
    //if url contains lightspeed systems
    alert("Triggered");
}
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
});
if(url.includes("lightspeed"))
{
    changePage;
}

alert("1st");
/*
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {

        // do your things
        alert("Checking");
        checkPage;

    }
})*/

