export class Range {
    private readonly from: number
    private readonly to: number

    constructor(start: number, end: number) {
        this.from = start
        this.to = end
    }

    public in(value: number) {
        return (this.from >= value) && (value <= this.to)
    }

    public get start() {
        return this.from
    }

    public get end() {
        return this.to
    }

    *[Symbol.iterator]() {
        let last = this.to
        let current = this.from

        while (current <= last) {
            yield current++
        }
    }

    [Symbol.toStringTag]() {
        return 'Range'
    }
}