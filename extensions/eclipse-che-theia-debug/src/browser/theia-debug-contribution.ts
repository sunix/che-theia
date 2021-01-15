import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const TheiaDebugCommand = {
    id: 'TheiaDebug.command',
    label: "Say Hello"
};

@injectable()
export class TheiaDebugCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaDebugCommand, {
            execute: () => this.messageService.info('Hello World 2!')
        });
    }
}

@injectable()
export class TheiaDebugMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaDebugCommand.id,
            label: TheiaDebugCommand.label
        });
    }
}
