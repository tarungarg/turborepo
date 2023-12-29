export enum CoreConstantsEnum {
    APIUrl = 'ServerAPIUrl',
    RequestMethod = 'RequestMethod'
}
export type CoreConstants = keyof typeof CoreConstantsEnum