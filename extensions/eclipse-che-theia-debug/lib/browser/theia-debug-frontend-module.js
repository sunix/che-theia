"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var theia_debug_contribution_1 = require("./theia-debug-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(theia_debug_contribution_1.TheiaDebugCommandContribution);
    bind(common_1.MenuContribution).to(theia_debug_contribution_1.TheiaDebugMenuContribution);
});
//# sourceMappingURL=theia-debug-frontend-module.js.map