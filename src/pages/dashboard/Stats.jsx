import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobsSlice'
import StatsContainer from '../../components/StatsContainer'
import ChartsContainer from '../../components/ChartsContainer'
const Stats = () => {
  const { isLoading, monthlyApp } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showStats())
  }, [])

  if (isLoading) {
    return (
      <section className='mt-[4rem]'>
        <div className='w-[6rem] h-[6rem] border-solid border-2 border-gray-100 mx-auto m-0 rounded-xl animate-spin'></div>
        <h2 className='text-center mt-8 text-xl text-gray-100'>Loading...</h2>
      </section>
    )
  }
  return (
    <>
      <StatsContainer />
      {/* {monthlyApp.length > 0 && <ChartsContainer />} */}
      <ChartsContainer />
    </>
  )
}

export default Stats
