// external modules
import childProcess from 'child_process'

export namespace TimeUtil {
    export function sleepSync(time: number) {
        const code = `\"setTimeout(function () { return true; }, ${time});\"`
        childProcess.execSync(`"${process.execPath}"` + ` -e ` + code);
    }
}