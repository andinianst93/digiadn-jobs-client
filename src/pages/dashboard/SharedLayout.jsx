import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, SmallSidebar, BigSidebar } from '../../components'
const SharedLayout = () => {
  return (
    <section>
      <main className='md:grid md:grid-flow-col'>
        <SmallSidebar />
        <BigSidebar />
        <div className='col-span-12'>
          <Navbar />
          <div className='w-[90vw] m-auto p-[2rem] md:w-[90%]'>
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  )
}

export default SharedLayout
