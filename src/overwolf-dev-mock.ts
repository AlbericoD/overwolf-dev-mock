import "@overwolf/types";
import { benchmarking } from "features/benchmarking";
import { version } from "features/version";
import { extensions } from "features/extensions";

/*
* Overwolf Dev Mock Progress
* version: 100%
* benchmarking: 100%
*
*/

//@ts-ignore
const overwolfDevMock: typeof overwolf = {
    version,
    benchmarking
}

export default
    Object.defineProperty(window, "overwolf", {
        writable: true,
        value: overwolfDevMock
    });