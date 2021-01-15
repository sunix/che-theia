import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
export declare const TheiaDebugCommand: {
    id: string;
    label: string;
};
export declare class TheiaDebugCommandContribution implements CommandContribution {
    private readonly messageService;
    constructor(messageService: MessageService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class TheiaDebugMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=theia-debug-contribution.d.ts.map