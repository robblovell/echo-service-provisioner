import { baseProvisionerType } from '..'
import { optionFunctionType } from '@provisioner/common'
import { config } from '../config';

export const helpMixin = (base: baseProvisionerType) => class extends base {

    help(command: string, options: optionFunctionType, messages: string[]) {
        messages.push(`  ${config.applicationName} Provisioner:`)
        messages.push(`    - This provisioner installs:${config.applicationName}`)
        messages.push(`\n`)
    }
}