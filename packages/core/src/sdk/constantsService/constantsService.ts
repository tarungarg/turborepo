export default class ConstantService {
    static constants = new Map()

    static setConstants(key: string, value: string): void {
        this.constants.set(key, value) 
    }

    static getConstantValue(key: string): string {
        return this.constants.get(key)
    }

    static getConstants(): Map<string, string> {
        return this.constants
    }
}
