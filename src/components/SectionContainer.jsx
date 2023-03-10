import React from 'react'

const SectionContainer = ({ children }) => {
  return (
    <div className='mx-auto max-w-5xl sm:px-6 xl:max-w-7xl xl:px-0'>
      {children}
    </div>
  )
}

export default SectionContainer
