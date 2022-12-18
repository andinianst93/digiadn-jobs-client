import React from 'react'

const JobInfo = ({ icon, text }) => {
  return (
    <div className='my-[0.5rem] flex items-center'>
      <span className='text-base mr-[1rem] flex items-center text-gray-800'>
        {icon}
      </span>
      <span className='capitalize'>{text}</span>
    </div>
  )
}

export default JobInfo
