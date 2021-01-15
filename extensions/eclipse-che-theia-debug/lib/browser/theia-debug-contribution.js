"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheiaDebugMenuContribution = exports.TheiaDebugCommandContribution = exports.TheiaDebugCommand = void 0;
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
exports.TheiaDebugCommand = {
    id: 'TheiaDebug.command',
    label: "Say Hello"
};
var TheiaDebugCommandContribution = /** @class */ (function () {
    function TheiaDebugCommandContribution(messageService) {
        this.messageService = messageService;
    }
    TheiaDebugCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.TheiaDebugCommand, {
            execute: function () { return _this.messageService.info('Hello World 2!'); }
        });
    };
    TheiaDebugCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], TheiaDebugCommandContribution);
    return TheiaDebugCommandContribution;
}());
exports.TheiaDebugCommandContribution = TheiaDebugCommandContribution;
var TheiaDebugMenuContribution = /** @class */ (function () {
    function TheiaDebugMenuContribution() {
    }
    TheiaDebugMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.TheiaDebugCommand.id,
            label: exports.TheiaDebugCommand.label
        });
    };
    TheiaDebugMenuContribution = __decorate([
        inversify_1.injectable()
    ], TheiaDebugMenuContribution);
    return TheiaDebugMenuContribution;
}());
exports.TheiaDebugMenuContribution = TheiaDebugMenuContribution;
//# sourceMappingURL=theia-debug-contribution.js.map