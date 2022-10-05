chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.get(tab.tabId, (currentTabData) => {
        console.log(currentTabData);
    });
});

chrome.enterprise.deviceAttributes.getDirectoryDeviceId(deviceId => {
   console.log(deviceId);
});