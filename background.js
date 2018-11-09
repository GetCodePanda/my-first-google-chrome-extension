chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });

    chrome.history.search({text: '', maxResults:100000}, function(data) {
        console.log(data)
    });
});
