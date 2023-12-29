import { LoggerService } from "..";
import ConstantService from "../constantsService/constantsService";
import { CoreConstantsEnum } from "../types/commonTypes";

export type FetchRequestType = {
    path: string
    options?: {
        method?: HTTPVerbs;
        params?: string | string[][] | Record<string, string> | URLSearchParams;
        headers?: {
            [key: string]: string;
        };
    }
}

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
    LoggerService.log(`Requst made on ${apiUrl} with options ${options} `)
    let res = await fetch(apiUrl, options)
    res = await res.json()
    return res
}

export default fetchRequest;
