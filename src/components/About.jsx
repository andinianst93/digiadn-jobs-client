import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

const About = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })
  return (
    <div className='rounded-md w-[100%] bg-slate-300 px-[4rem] py-[3rem] shadow-md mt-4'>
      <h3 className='text-3xl font-bold text-gray-800 mt-0'>Your Profile</h3>
      <div className='grid gap-y-[0.5rem] mt-6'>
        <p className='text-lg font-semibold'>
          First Name: <span className='font-normal'>{userData.name}</span>{' '}
        </p>
        <p className='text-lg font-semibold'>
          Last Name: <span className='font-normal'>{userData.lastName}</span>{' '}
        </p>
        <p className='text-lg font-semibold'>
          Email: <span className='font-normal'>{userData.email}</span>{' '}
        </p>
        <p className='text-lg font-semibold'>
          Location: <span className='font-normal'>{userData.location}</span>{' '}
        </p>
      </div>
    </div>
  )
}

export default About
