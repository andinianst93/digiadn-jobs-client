import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='m-4'>
      <label
        htmlFor={name}
        className='block text-base mb-2 capitalize font-semibold'
      >
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='w-[100%] py-[0.375rem] px-[0.75rem] bg-gray-100 border-2 border-solid'
      />
    </div>
  )
}

export default FormRow
