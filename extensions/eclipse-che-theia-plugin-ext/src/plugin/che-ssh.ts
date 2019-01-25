/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { RPCProtocol } from '@theia/plugin-ext/lib/api/rpc-protocol';
import { PLUGIN_RPC_CONTEXT, CheSshMain, CheSsh } from '../common/che-protocol';
import { che as cheApi } from '@eclipse-che/api';

export class CheSshImpl implements CheSsh {

    private readonly sshMain: CheSshMain;

    constructor(rpc: RPCProtocol) {
        this.sshMain = rpc.getProxy(PLUGIN_RPC_CONTEXT.CHE_SSH_MAIN);
    }

    /**
    * @inheritDoc
    */
    async generate(service: string, name: string): Promise<cheApi.ssh.SshPair> {
        try {
            return await this.sshMain.$generate(service, name);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    /**
     * @inheritDoc
     */
    async create(sshKeyPair: cheApi.ssh.SshPair): Promise<void> {
        try {
            return await this.sshMain.$create(sshKeyPair);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    /**
     * @inheritDoc
     */
    async getAll(service: string): Promise<cheApi.ssh.SshPair[]> {
        try {
            return await this.sshMain.$getAll(service);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    /**
     * @inheritDoc
     */
    async get(service: string, name: string): Promise<cheApi.ssh.SshPair> {
        try {
            return await this.sshMain.$get(service, name);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    /**
     * @inheritDoc
     */
    async delete(service: string, name: string): Promise<void> {
        try {
            return await this.sshMain.$deleteKey(service, name);
        } catch (e) {
            return Promise.reject(e);
        }
    }

}
