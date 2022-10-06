try {

    window.onload = () => {
        document.querySelector("#btn").addEventListener('click', (e) => {

            chrome.system.memory.getInfo((memory) => {
                const totalMemory = Math.ceil((memory.capacity / (1024 * 1024)) / 1024)
                document.querySelector("#memory span").innerHTML = `${totalMemory}GB`;
            });

            chrome.system.cpu.getInfo((cpu) => {
                document.querySelector("#cpu span").innerHTML = cpu.modelName;
            });

            chrome.system.storage.getInfo((storage) => {
                let totalStorage = 0;
                storage.forEach(element => {
                    if (element.type === 'fixed') {
                        totalStorage += Math.ceil(element.capacity / (1024 * 1024) / 1024);
                    }
                });
                document.querySelector("#storage span").innerHTML = `${totalStorage}GB`;
            });

            chrome.enterprise.deviceAttributes.getDeviceSerialNumber(serialNumber => {
                document.getElementById("serial")
                    .innerHTML = serialNumber;
                console.log("Placed serial number.");
            });

            chrome.enterprise.hardwarePlatform.getHardwarePlatformInfo(modelNumber => {
                document.getElementById("model")
                    .innerHTML = modelNumber;
                console.log("Placed model number.");
            });

        });
    }

} catch (error) {
    console.log(error);
}