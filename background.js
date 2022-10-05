chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.get(tab.tabId, (currentTabData) => {
        console.log(currentTabData);
    });
});

chrome.system.cpu.getInfo((cpu) => {
    console.log(cpu);
});

chrome.system.memory.getInfo((memory) => {
    console.log(memory);
});

chrome.system.storage.getInfo((storage) => {
    console.log(storage);
});