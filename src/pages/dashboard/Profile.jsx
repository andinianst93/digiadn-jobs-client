import React, { useState } from 'react'
import { FormRow, About } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, lastName, location } = userData
    if (!name || !email || !lastName || !location) {
      toast.error('please fill out all field')
      return
    }
    dispatch(updateUser({ name, email, lastName, location }))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }
  return (
    <section>
      <div className='rounded-md w-[100%] bg-slate-300 px-[4rem] py-[3rem] shadow-md'>
        <form
          onSubmit={handleSubmit}
          className='m-0 rounded-none shadow-none p-0 max-w-[100%] w-[100%]'
        >
          <h3 className='text-3xl font-bold text-gray-800 mt-0'>Profile</h3>
          <p className='text-base font-light text-gray-700'>
            Update your profile below.
          </p>
          <div className='grid gap-y-[0.5rem] md:grid-cols-2 md:items-center md:gap-x-[1rem]'>
            <FormRow
              type='text'
              labelText='first name'
              name='name'
              handleChange={handleChange}
            />
            <FormRow
              type='text'
              labelText='last name'
              name='lastName'
              handleChange={handleChange}
            />
            <FormRow type='email' name='email' handleChange={handleChange} />
            <FormRow type='text' name='location' handleChange={handleChange} />
          </div>
          <div className='mx-auto max-w-fit mt-6 mb-0'>
            <button
              className='rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Please wait...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
      <About />
    </section>
  )
}

export default Profile
