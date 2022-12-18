import React from 'react'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice'
const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    if (isLoading) return
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearFilters())
  }
  return (
    <section>
      <div className='rounded-md w-[100%] bg-slate-300 px-[4rem] py-[3rem] shadow-md mb-12'>
        <form className='m-0 rounded-none shadow-none p-0 max-w-[100%] w-[100%]'>
          <h2 className='text-3xl text-gray-800 font-bold'>Search</h2>
          <div className='grid gap-y-[0.5rem] md:grid-cols-3 md:items-center md:gap-x-[1rem]'>
            <FormRow
              type='text'
              name='search'
              value={search}
              handleChange={handleSearch}
            />
            {/* search by status */}
            <FormRowSelect
              labelText='status'
              name='searchStatus'
              value={searchStatus}
              handleChange={handleSearch}
              list={['all', ...statusOptions]}
            />
            {/* search by type */}
            <FormRowSelect
              labelText='type'
              name='searchType'
              value={searchType}
              handleChange={handleSearch}
              list={['all', ...jobTypeOptions]}
            />
            {/* sort */}
            <FormRowSelect
              name='sort'
              value={sort}
              handleChange={handleSearch}
              list={sortOptions}
            />
            <div className='grid grid-cols-2 gap-x-2 md:mt-8'>
              <button
                type='button'
                className='h-[35px] rounded-lg bg-red-800  text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-800 hover:bg-red-500 hover:ring-red-500'
                disabled={isLoading}
                onClick={handleSubmit}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchContainer
