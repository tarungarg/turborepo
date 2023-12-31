import { LoggerService } from "..";
import ConstantService from "../constantsService/constantsService";
import { CoreConstantsEnum, OptionalMapped } from "../types/commonTypes";

export type FetchRequestType = RequestInit &  {
    path: string
    options?: OptionalFetchRequestTypeOptions,
    cache?: string
}

export type FetchRequestTypeOptions = RequestInit & {
    method: HTTPVerbs;
    params: string | string[][] | Record<string, string> | URLSearchParams;
    headers: {
        [key: string]: string;
    },
    next: {
        [key: string]: number;
    }
    cache: string
}

export type OptionalFetchRequestTypeOptions = OptionalMapped<FetchRequestTypeOptions>

export enum HTTPVerbs {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

const fetchRequest = async({ path, options }: FetchRequestType) => {
    let apiUrl = ConstantService.getConstantValue(CoreConstantsEnum.APIUrl)
    apiUrl += path
    LoggerService.log(`Requst made on ${apiUrl} with options ${JSON.stringify(options)} `)
    let res = await fetch(apiUrl, options)
    res = await res.json()
    return res
}

export default fetchRequest;
