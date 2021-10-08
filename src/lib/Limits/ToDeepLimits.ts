// external modules
import _ from 'lodash'
// custom structures
import { Range } from '../CustomStructures'

/**
 *  Class ToDeepLimits:
 *      description:
 *          This class using in class Limits for take more deep getting value in limits data.
 * */
export class ToDeepLimits<TData> {
    public constructor(private readonly data: TData)  {}

    public deep<TKey extends keyof TData>(key: TKey): ToDeepLimits<TData[TKey]> {
        const value = _.get(this.data, key, null);

        if(!value) {
            const errorPrefix = ToDeepLimits.getErrorPrefix();
            throw new Error(`${errorPrefix}: value by "${key}" not exist`)
        }

        return new ToDeepLimits(value)
    }

    public getValue() {
        return this.data;
    }

    public getValueAsInt() {
        return Number(this.data)
    }

    public getValueAsStr() {
        return String(this.data)
    }

    public getValueAsRange() {
        if(_.isArray(this.data)) {
            return new Range(this.data[0], this.data[1])
        }
    }

    private static getErrorPrefix() {
        return `class ${this.name}`
    }
}