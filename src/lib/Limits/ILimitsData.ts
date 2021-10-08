export type TPair<TF, TS> = [TF, TS];
export type TInterval<TDimension, TValue> = {
    dimension: TDimension,
    value: TValue
}

export interface ILimits {
    stories: {
        day: TPair<number, number>;
    },
    likes: {
        hour: number;
        day: TPair<number, number>;
    },
    follows: {
        hour: number;
        day: TPair<number, number>;
    },
    unfollows: {
        interval: TInterval<string, TPair<number, number>>,
        day: {
            mutual: number;
            nonreciprocal: number;
            ['break:mutual+nonreciprocal']: TInterval<string, TPair<number, number>>
        }
    }
}