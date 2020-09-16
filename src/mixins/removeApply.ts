import { baseProvisionerType } from '..'

export const removeApplyMixin = (base: baseProvisionerType) => class extends base {

    async removeApply() {
        // no extra resources to clean up.
    }
}