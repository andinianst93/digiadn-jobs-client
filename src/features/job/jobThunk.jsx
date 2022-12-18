import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice'
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
import { clearValues } from './jobSlice'
import { logoutUser } from '../user/userSlice'

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post('/jobs', job)
    thunkAPI.dispatch(clearValues)
    return response.data
  } catch (error) {
    return thunkAPI.checkForUnauthorizedResponse(error.thunkAPI)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  console.log(jobId)
  try {
    const response = await customFetch.delete(`/jobs/${jobId}`)
    thunkAPI.dispatch(getAllJobs())
    return response.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return thunkAPI.checkForUnauthorizedResponse(error.thunkAPI)
  }
}

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    return thunkAPI.checkForUnauthorizedResponse(error.thunkAPI)
  }
}
