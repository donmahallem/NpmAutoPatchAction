/*!
 * Source https://github.com/donmahallem/NpmAutoPatchAction
 */

import * as core from "@actions/core";
import * as github from "@actions/github";

export class PatchClient {
    constructor(private secret: string) {
        core.info(core.getInput("test") + " - " + github.context.actor);
    }
}