
import {
    consoleLogDisabled,
    consoleLog,
    preloadAssets
} from "../js/utils.js";

import { buildDOM } from "../js/build.js";

export async function initApp() {
    consoleLogDisabled(
        "Mia: Logging Disabled in ../js/utils.js, only errors and warns will be displayed!"
    );

    consoleLog("[Initialize] [Build DOM]");
    await buildDOM();
   
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            void preloadAssets();
        });
    });
}

consoleLog("[Initialize]");

window.addEventListener("DOMContentLoaded", () => {
    void initApp();
});
