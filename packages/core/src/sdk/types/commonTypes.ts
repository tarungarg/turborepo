export enum CoreConstantsEnum {
  APIUrl = 'ServerAPIUrl',
  RequestMethod = 'RequestMethod',
}
export type CoreConstants = keyof typeof CoreConstantsEnum

export type OptionalMapped<T> = {
  [P in keyof T]?: T[P]
}
