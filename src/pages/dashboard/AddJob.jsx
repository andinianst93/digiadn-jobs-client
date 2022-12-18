import React from 'react'
import { FormRow, FormRowSelect } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice'
import { useEffect } from 'react'
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields.')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: 'jobLocation',
          value: user.location,
        })
      )
    }
  }, [])

  return (
    <section>
      <div className='rounded-md w-[100%] bg-slate-300 px-[4rem] py-[3rem] shadow-md'>
        <form className='m-0 rounded-none shadow-none p-0 max-w-[100%] w-[100%]'>
          <h2 className='text-gray-800 text-3xl capitalize font-bold'>
            {isEditing ? 'edit job' : 'add job'}
          </h2>
          <div className='grid gap-y-[0.5rem] md:grid-cols-3 md:items-center md:gap-x-[1rem]'>
            <FormRow
              type='text'
              name='position'
              value={position}
              handleChange={handleInput}
            />
            <FormRow
              type='text'
              name='company'
              value={company}
              handleChange={handleInput}
            />
            <FormRow
              type='text'
              labelText='job location'
              name='jobLocation'
              value={jobLocation}
              handleChange={handleInput}
            />
            <FormRowSelect
              name='status'
              value={status}
              handleChange={handleInput}
              list={statusOptions}
            />
            <FormRowSelect
              name='jobType'
              labelText='job type'
              value={jobType}
              handleChange={handleInput}
              list={jobTypeOptions}
            />
            {/* btn container */}
            <div className='grid grid-cols-2 gap-x-2 md:mt-8'>
              <button
                type='button'
                onClick={() => dispatch(clearValues())}
                className='h-[35px] rounded-lg bg-sky-600  text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700'
              >
                Clear
              </button>
              <button
                type='submit'
                onClick={handleSubmit}
                disabled={isLoading}
                className='h-[35px] rounded-lg bg-sky-600 text-base  font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddJob
