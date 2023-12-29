"use client"

import { useEffect } from "react";
import { getCMSDataSliceReq, updateFooter } from "../../sdk/services/features/cmsSlice";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from '@myshop/redux-util';

function Footer() {
    console.log("footer render !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    const dispatch:AppDispatch = useDispatch()
    const footerInfo = useSelector((state: RootState) => state.cmsDataSlice.cmsData.footerMetaInfo);

    useEffect(() => {
        dispatch(getCMSDataSliceReq())
    }, []);

    return (
        <>
            <h1>{JSON.stringify(footerInfo)}</h1>
            <button onClick={() => dispatch(updateFooter())}>Update Footer</button>
        </>
    );
}

export default Footer;