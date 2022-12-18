import React from 'react'

const StatItem = ({ title, icon, count, color, bcg }) => {
  return (
    <article className={`${color} ${bcg} p-[2rem] rounded-md mb-2`}>
      <header className='flex items-center justify-between'>
        <span className={`block font-bold text-2xl`}>{count}</span>
        <span className='w-[70px] h-[60px] rounded-md flex items-center justify-center text-2xl'>
          {icon}
        </span>
      </header>
      <h5 className='m-0 capitalize text-left mt-2 text-lg'>{title}</h5>
    </article>
  )
}

export default StatItem
