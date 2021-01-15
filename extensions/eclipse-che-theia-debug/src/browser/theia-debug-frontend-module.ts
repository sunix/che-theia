/**
 * Generated using theia-extension-generator
 */
import { TheiaDebugCommandContribution, TheiaDebugMenuContribution } from './theia-debug-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TheiaDebugCommandContribution);
    bind(MenuContribution).to(TheiaDebugMenuContribution);
});
