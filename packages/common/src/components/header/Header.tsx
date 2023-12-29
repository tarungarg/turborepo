"use client"

import { useEffect } from "react";
import { getCMSDataSliceReq, updateHeader } from "../../sdk/services/features/cmsSlice";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from '@myshop/redux-util';

function Header() {
  console.log("header render !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    const dispatch:AppDispatch = useDispatch()
    const headerData = useSelector((state: RootState) => state.cmsDataSlice.cmsData.headerMetaInfo);

    useEffect(() => {
        dispatch(getCMSDataSliceReq())
    }, []);

    return (
        <>
        <h1>{JSON.stringify(headerData)}</h1>
            <button onClick={() => dispatch(updateHeader())}>Update Footer</button>
            </>

    );

}

export default Header;