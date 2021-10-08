// external modules
import _ from 'lodash'
import fs from 'fs';
import path from 'path'
// types
import { TObject } from '@custom/types'
import { ILimits } from './ILimitsData'
// other
import { ToDeepLimits } from './ToDeepLimits'

const DEFAULT_LIMITS_FILE_NAME = 'default-limits.json';

/**
 *  Class Limits:
 *      description:
 *          This class intended for contain all limits for everyone actions in Instagram.
 *          He by default load file "default-limits.json" but provide methods for redefine limits;
 * */
export class Limits {
    private data: ILimits = {} as any;
    public static readonly defaultLimitsFilePath = path.join(__dirname, DEFAULT_LIMITS_FILE_NAME);

    public constructor() {}

    public getLimit<TKey extends keyof ILimits>(key: TKey) {
        const value = this.data[key];

        if(!value) {
            const errorPrefix = Limits.getErrorPrefix();
            throw new Error(`${errorPrefix}: value by "${key}" not exist`)
        }

        return new ToDeepLimits(value);
    }

    public redefine(data: TObject.MakeOptionalDeep<ILimits>) {
        this.data = _.merge(this.data, data)
    }

    public async loadDefaultLimits(): Promise<void> {
        this.data = await Limits.loadConfigFile(Limits.defaultLimitsFilePath);
    }

    private static async loadConfigFile(filePath: string): Promise<ILimits> {
        const fileData = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
        return JSON.parse(fileData);
    }

    private static getErrorPrefix() {
        return `class ${this.name}`
    }
}