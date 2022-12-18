import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/user/userSlice'
import NavLinks from './Navlinks'

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <aside className='md:hidden'>
      <div
        className={
          isSidebarOpen
            ? 'fixed inset-0 bg-gray-500  flex justify-center items-center z-[99] bg-opacity-5'
            : 'fixed inset-0 bg-gray-500  flex justify-center items-center z-[-1] opacity-0'
        }
      >
        <div className='bg-gray-800 w-[90vw] h-[95vh] rounded-md py-[4rem] px-[2rem] relative flex items-center flex-col'>
          <button
            type='button'
            onClick={toggle}
            className='absolute top-[10px] left-[10px] bg-transparent border-transparent text-3xl text-red-800 cursor-pointer'
          >
            <FaTimes />
          </button>
          <header>
            <h2 className='text-3xl font-bold'>
              <span className='text-gray-100'>DIGI</span>
              <span className='text-sky-500'>ADN</span>
            </h2>
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </aside>
  )
}

export default SmallSidebar
