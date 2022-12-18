import React from 'react'
import NavLinks from './Navlinks'
import { useSelector } from 'react-redux'
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <aside className='hidden md:block md:shadow-md'>
      <div className='bg-slate-800 min-h-[100vh] h-[100%] w-full  transition-all'>
        <div className='sticky top-0'>
          <header className='h-[6rem] flex items-center pl-[2.5rem]'>
            <h2 className='text-3xl font-bold'>
              <span className='text-gray-100'>DIGI</span>
              <span className='text-sky-500'>ADN</span>
            </h2>
          </header>
          <div className='ml-6'>
            <NavLinks />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default BigSidebar
