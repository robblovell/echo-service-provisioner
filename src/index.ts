import { mix } from 'mixwith'
import { ProvisionerBase } from '@provisioner/common'

import {
    removeInquireMixin,
    removeApplyMixin,
    createApplyMixin,
    createInquireMixin,
    helpMixin
} from './mixins/index'

export type baseProvisionerType = new (...a) => Provisioner & ProvisionerBase

export class Provisioner extends mix(ProvisionerBase).with(createInquireMixin, createApplyMixin,) {
}