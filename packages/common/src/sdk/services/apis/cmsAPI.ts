import { FetchRequestType, HTTPVerbs, fetchRequest } from '@myshop/core';
import type {OptionalFetchRequestTypeOptions} from '@myshop/core'

import { GetCMSDetailsPath } from './apiConstants';

export const getCMSDetails = <T>({ options }: { options?: OptionalFetchRequestTypeOptions }): T => {
    console.log("optionsoptionsoptions", options)
    let req: FetchRequestType = {
        path: GetCMSDetailsPath,
        options: {
            method: HTTPVerbs.GET,
            ...options
        }
    }

    return makeRequest<T>(req)
}

function makeRequest<T>(req: FetchRequestType): T {
    return fetchRequest(req) as T
}
