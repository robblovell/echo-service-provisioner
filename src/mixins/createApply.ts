import { baseProvisionerType } from '..'
import { config } from "../config"

export const createApplyMixin = (base: baseProvisionerType) => class extends base {

    async createApply() {
        await this.ensureServiceNamespacesExist()
        await this.ensureIsInstalled()
        await this.ensureIsRunning()
    }

    get applicationPods() {
        return {
            kind: 'Pod',
            metadata: {
                namespace: this.serviceNamespace,
                labels: {
                    name: config.applicationName
                }
            }
        }
    }

    async ensureIsInstalled() {
        config['namespace'] = this.serviceNamespace
        for (const crdFile of config.kubernetes) {
            await this.manager.cluster
                .begin(`Install ${String(config?.applicationName)} CRD: ${String(crdFile)} (kind: ${String(this.manager?.document?.kind)})`)
                .addOwner(this.manager.document)
                .upsertFile(crdFile, config)
                .end()
        }
    }

    async ensureIsRunning() {
        await this.manager.cluster.begin('Ensure a ' + this.applicationName + ' replica is running')
            .beginWatch(this.applicationPods)
            .whenWatch(({condition}) => condition.Ready == 'True', (processor, pod) => {
                processor.endWatch()
            })
            .end()
    }
}
