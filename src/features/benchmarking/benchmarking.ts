import { MockCommonMethods } from "../../utils";

let currentInterval: null | number = null;

const requestInterval = (interval: number, callback: overwolf.CallbackFunction<overwolf.Result>) => {
    if (currentInterval) clearInterval(currentInterval)
    currentInterval = setInterval(() => {
        callback({ success: true })
    }, interval)
}

export const benchmarking = {
    onFpsInfoReady: MockCommonMethods,
    onHardwareInfoReady: MockCommonMethods,
    onProcessInfoReady: MockCommonMethods,
    requestFpsInfo: requestInterval,
    requestHardwareInfo: requestInterval,
    requestProcessInfo: requestInterval,
    requestPermissions: (callback: overwolf.CallbackFunction<overwolf.Result>) => {
        callback({ success: true });
    },
    stopRequesting: () => { },
}

