declare module '@custom/types' {
    export namespace TPromise {
        export type TOr<T> = T | Promise<T>
    }

    export namespace TFunction {
        export type Args<T> = T extends (...args: infer U) => any ? U : never;
        export type Arg0<T> = T extends (arg1: infer U) => any ? U : never;
    }

    export namespace TObject {
        export type TKeys<T> = Array<keyof T>;
        export type TValues<TObject> = TObject extends Record<string, infer TKey> ? Array<TKey> : never;

        export type MakeOptional<T, K extends string | number | symbol> = Omit<T, K> & Partial<T>;
        export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

        export type MakeNilAll<T extends object> = {
            [TKey in keyof T]?: T[TKey] | null;
        };
        export type MakeNil<T extends object, TKeys extends keyof T> = {
            [TKey in TKeys]?: T[TKey] | null;
        };
    }

    export namespace TArray {
        export type TKeys<T> = Array<Exclude<keyof T, keyof Array<any>>>;
        export type TValues<T> = Array<T[number]>;

        export type SingleType<TValue> = TValue extends Array<infer TSingle> ? TSingle : TValue;

        export type PossibleArray<TValue> = TValue | Array<TValue>;

        export type Pair<T, K> = [T, K];
        export type Pairs<T, K> = Pair<T, K>[];
    }

    export namespace TType {
        export type PartialAdvanced<Type, Fields extends keyof Type> = Partial<Pick<Type, Fields>> & Omit<Type, Fields>;
    }
}
