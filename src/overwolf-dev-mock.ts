import { benchmarking } from "./features/benchmarking";
import { version } from "./features/version";
/*
* Overwolf Dev Mock Progress
* version: 100%
* benchmarking: 100%
*
*/

//@ts-ignore
const overwolfDevMock = (backgroundWindowName: string): typeof overwolf => ({
    version,
    benchmarking
})

export function defineBackgroundWindow(name: string) {
    if (!name) throw new Error('The name of the background window has not been defined.')

    else Object.defineProperty(window, "overwolf", {
        writable: true,
        value: overwolfDevMock(name)
    });
}
