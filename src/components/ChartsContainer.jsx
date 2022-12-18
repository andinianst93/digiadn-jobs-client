import React, { useState } from 'react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useSelector } from 'react-redux'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApp: data } = useSelector((store) => store.allJobs)
  return (
    <section className='mt-[4rem] text-center'>
      <h2 className='capitalize text-slate-50 text-3xl mb-4 font-semibold'>
        Monthly Applications
      </h2>
      <button
        type='button'
        onClick={() => setBarChart(!barChart)}
        className='bg-transparent border-transparent capitalize text-sky-300 font-semibold hover:underline text-xl mb-4'
      >
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </section>
  )
}

export default ChartsContainer
