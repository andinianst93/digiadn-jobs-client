import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import JobInfo from './JobInfo'
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from 'react-icons/fa'
import moment from 'moment'
import { deleteJob, setEditJob } from '../features/job/jobSlice'

const Job = ({
  _id,
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
}) => {
  const dispatch = useDispatch()
  return (
    <section className='bg-slate-300 rounded-md shadow-md my-4'>
      <header className='px-[1rem] py-[0.5rem] border-b-2 border-gray-50 grid grid-flow-col auto-cols-auto lg:auto-cols-max'>
        <div className='w-[60px] h-[60px] grid place-items-center bg-blue-500 rounded-xl text-3xl font-bold uppercase text-gray-50 mr-[2rem] my-4'>
          {company.charAt(0)}
        </div>
        <div className='my-4'>
          <h5 className='mb-[0.25rem] capitalize font-bold'>{position}</h5>
          <p className='capitalize font-semibold'>{company}</p>
        </div>
      </header>
      <div className='px-[1rem] py-[1.5rem]'>
        <div className='grid md:grid-cols-2 gap-x-[0.5rem]'>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo
            icon={<FaCalendarAlt />}
            text={moment(createdAt).format('MMM, Do YYYY')}
          />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div
            className={
              status === 'pending'
                ? 'capitalize text-center w-[100px] h-[30px] bg-yellow-200 text-yellow-700 py-1 rounded-md'
                : status === 'interview'
                ? 'capitalize text-center w-[100px] h-[30px] bg-sky-200 text-sky-700 py-1 rounded-md'
                : 'capitalize text-center w-[100px] h-[30px] bg-red-200 text-red-700 py-1 rounded-md'
            }
          >
            {status}
          </div>
        </div>
        <footer className='mt-[1rem]'>
          <div>
            <Link
              to='/add-job'
              className='cursor-pointer text-white bg-green-500 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-sm inline-block mr-2'
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type='button'
              className='cursor-pointer text-red-100 bg-red-700 border-transparent rounded-md py-[0.375rem] px-[0.75rem] shadow-sm inline-block'
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Job
