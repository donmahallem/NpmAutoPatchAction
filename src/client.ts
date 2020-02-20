/*!
 * Source https://github.com/donmahallem/NpmAutoPatchAction
 */

import * as core from "@actions/core";
import * as github from "@actions/github";

export class PatchClient {
    constructor(private secret: string) {
        console.log(core.getInput("test"), github.context.actor);
    }
}