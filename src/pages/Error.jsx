import React from 'react'
import { Link } from 'react-router-dom'
import { SectionContainer } from '../components'
const Error = () => {
  return (
    <SectionContainer>
      <div className='flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
        <div className='space-x-2 pt-6 pb-8 md:space-y-5'>
          <h2 className='text-yellow-400 text-5xl font-extrabold leading-9 tracking-tight pt-2 sm:text-5xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14'>
            404
          </h2>
        </div>
        <div className='p-2'>
          <h2 className='text-2xl font-semibold text-gray-50'>
            Page not found
          </h2>
          <p className='text-base font-semibold text-gray-400'>
            We can not seem to find page you are looking for.
          </p>
        </div>
      </div>
      <div className='mx-auto mt-4 max-w-fit rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700'>
        <Link to='/'>Back Home</Link>
      </div>
    </SectionContainer>
  )
}

export default Error
