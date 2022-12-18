import React, { useState } from 'react'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { useEffect } from 'react'
import { PageBtnContainer } from './PageBtnContainer'
const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

  if (isLoading) {
    return (
      <section className='mt-[4rem]'>
        <div className='w-[6rem] h-[6rem] border-solid border-2 border-gray-100 mx-auto m-0 rounded-xl animate-spin'></div>
        <h2 className='text-center mt-8 text-xl text-gray-100'>Loading...</h2>
      </section>
    )
  }
  if (jobs.length === 0) {
    return (
      <div className='text-left'>
        <h5 className='text-xl text-gray-100'>
          No{' '}
          <span className='text-sky-400 underline font-semibold'> JOBS </span>{' '}
          to display.
        </h5>
      </div>
    )
  }

  return (
    <section>
      <h2 className='text-3xl text-gray-100 font-bold capitalize'>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h2>
      <div className='md:grid md:grid-cols-2 md:gap-x-[1rem]'>
        {jobs.map((i) => {
          return <Job key={i._id} {...i}></Job>
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  )
}

export default JobsContainer
