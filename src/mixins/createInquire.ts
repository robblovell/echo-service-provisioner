import { baseProvisionerType } from '..'

export const createInquireMixin = (base: baseProvisionerType) => class extends base {

    async inquire(args) {
        // Currently no provisioner options are supported for this application provisioner
    }

}