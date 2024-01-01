import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CmsMetaModel } from '../models'
import { getCMSDetails } from '../apis'
import { AppDispatch } from '@myshop/redux-util'

export const cmsReduceName = 'cmsDataSlice'
const getCMSDataSliceReqName = cmsReduceName + '/getCMSData'

export const getCMSDataSliceReq = createAsyncThunk<
  Response,
  void,
  {
    dispatch: AppDispatch
  }
>(getCMSDataSliceReqName, async () => await getCMSDetails({}))

type GenericAsyncThunk = AsyncThunk<
  CmsMetaModel,
  unknown,
  {
    dispatch: AppDispatch
    state: InitialCMSState
  }
>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

function isPendingGenericAction(action: PendingAction) {
  return action.type.endsWith('/pending')
}
function isFulfilledAction(action: FulfilledAction) {
  return action.type.endsWith('/fulfilled')
}

function isRejectedAction(action: RejectedAction) {
  return action.type.endsWith('/rejected')
}

export type InitialCMSState = {
  cmsData: CmsMetaModel
  isLoading: boolean
  hasError: boolean
}

const initialState: InitialCMSState = {
  cmsData: {} as CmsMetaModel,
  isLoading: true,
  hasError: false,
}

export const cmsSlice = createSlice({
  name: cmsReduceName,
  initialState,
  reducers: {
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {
    /**
     * Common reducers
     */
    builder.addMatcher(isRejectedAction, (state: InitialCMSState) => {
      state.hasError = true
      state.isLoading = false
    })
    builder.addMatcher(isFulfilledAction, (state: InitialCMSState, action: PayloadAction<CmsMetaModel>) => {
      state.hasError = false
      state.cmsData = action.payload
    })
    builder.addMatcher(isPendingGenericAction, (state: InitialCMSState) => {
      state.hasError = false
    })
  },
})

export const { updateIsLoading } = cmsSlice.actions
