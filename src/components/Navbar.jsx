import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { logoutUser, toggleSidebar } from '../features/user/userSlice'
import { clearStore } from '../features/user/userSlice'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <nav className='h-[6rem] flex items-center justify-center bg-slate-800 sticky top-0'>
      <div className='flex w-[90vw] items-center justify-between md:w-[90%]'>
        <button
          type='button'
          className='md:hidden bg-transparent border-transparent text-2xl text-gray-50 cursor-pointer flex items-center'
          onClick={toggle}
        >
          <FaAlignLeft />
        </button>

        <div className='md:mx-auto'>
          <h2 className='text-2xl font-bold text-gray-100'>Dashboard</h2>
        </div>
        <div className='relative'>
          <button
            type='button'
            className='flex items-center justify-center gap-y-[0.5rem] gap-x-0 text-gray-50 shadow-md bg-blue-800 max-w-fit px-2 py-1 rounded-md'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle className='mr-2' />
            <p className='capitalize'>{user?.name}</p>
            <FaCaretDown />
          </button>
          <div
            className={
              showLogout
                ? 'absolute top-[40px] left-0 w-[100%] bg-blue-300 shadow-md rounded-md p-[0.5rem] text-center'
                : 'absolute top-[40px] left-0 w-[100%] bg-blue-300 shadow-md rounded-md p-[0.5rem] text-center hidden'
            }
          >
            <button
              type='button'
              className='bg-transparent border-transparent  capitalize cursor-pointer text-gray-800 rounded-md'
              onClick={() => dispatch(clearStore('Logging out...'))}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
