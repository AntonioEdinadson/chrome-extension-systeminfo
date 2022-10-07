try {

    window.onload = () => {
        document.querySelector("#btn").addEventListener('click', (e) => {
            chrome.system.memory.getInfo((memory) => {
                const totalMemory = Math.ceil((memory.capacity / (1024 * 1024)) / 1024);
                document.querySelector("#memory span").innerText = `${totalMemory}GB`;
                console.log(totalMemory);
            });

            chrome.system.cpu.getInfo((cpu) => {
                console.log(cpu.modelName);
                document.querySelector("#cpu span").innerText = cpu.modelName;
            });

            chrome.system.storage.getInfo((storage) => {
                let totalStorage = 0;
                storage.forEach(element => {
                    totalStorage += Math.ceil(element.capacity / (1024 * 1024) / 1024);
                    console.log(element);
                });
                document.querySelector("#storage span").innerText = `${totalStorage}GB`;
            });

            chrome.enterprise.deviceAttributes.getDeviceSerialNumber((serial) => {
                console.log(serial);
            });
        });
    }

} catch (error) {
    console.log(error);
}