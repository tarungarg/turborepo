import {FetchRequestType, HTTPVerbs, fetchRequest} from '@myshop/core';

import { GetCMSDetailsPath } from './apiConstants';

export const getCMSDetails = ():Promise<Response> => {
    let req = {
        path: GetCMSDetailsPath,
        options: {
            method: HTTPVerbs.GET
        }
    }

    return makeRequest(req)
}

function makeRequest<T>(req: FetchRequestType): Promise<Response> {
    return fetchRequest(req)
}
