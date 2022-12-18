import React from 'react'
import { SectionContainer } from '../components'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <SectionContainer>
      <main className='mt-4'>
        <nav>
          <h2 className='ml-8 text-3xl font-bold'>
            <span className='text-gray-100'>DIGI</span>
            <span className='text-sky-500'>ADN</span>
          </h2>
        </nav>
        <div>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
              <h1 className='text-3xl my-4 font-bold tracking-tight text-center sm:text-5xl text-yellow-400'>
                Jobs Tracking <span className='text-sky-500'>App</span>
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-200 text-center'>
                The most reliable job tracking app for job seekers. Job hunting
                is a stressful, harrowing, overwhelming activity. These free web
                application help you organize your job search, track job
                applications, and guide you to landing a gig.
              </p>
              <div className='my-4 text-center'>
                <Link to='/register'>
                  <button
                    type='button'
                    className='rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700'
                  >
                    Login/Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SectionContainer>
  )
}

export default LandingPage
