const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='m-4'>
      <label
        htmlFor={name}
        className='block text-base capitalize font-semibold mb-[0.5rem]'
      >
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='w-[100%] py-[0.375rem] px-[0.75rem] bg-gray-100 border-2 border-solid capitalize'
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
