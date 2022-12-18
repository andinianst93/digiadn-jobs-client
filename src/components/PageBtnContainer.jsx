import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../features/allJobs/allJobsSlice'

export const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  // console.log(pages)
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < numOfPages) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage))
  }
  return (
    <section className='h-[6rem] mt-[2rem] flex items-center justify-end flex-wrap gap-[1rem]'>
      <button
        type='button'
        className='w-[100px] h-[40px] bg-blue-800 border-transparent rounded-md text-slate-50 capitalize flex items-center justify-center gap-[0.5rem] cursor-pointer'
        onClick={prevPage}
      >
        <HiChevronDoubleLeft /> prev
      </button>
      <div className='bg-yellow-200 rounded-md'>
        {pages.map((p) => {
          return (
            <button
              type='button'
              className={
                p === page
                  ? 'bg-transparent border-transparent w-[50px] h-[40px] font-bold text-base rounded-md cursor-pointer bg-yellow-500'
                  : 'bg-transparent border-transparent w-[50px] h-[40px] font-bold text-base rounded-md cursor-pointer'
              }
              key={p}
              onClick={() => dispatch(changePage(p))}
            >
              {p}
            </button>
          )
        })}
      </div>
      <button
        type='button'
        className='w-[100px] h-[40px] bg-blue-800 border-transparent rounded-md text-slate-50 capitalize flex items-center justify-center gap-[0.5rem] cursor-pointer'
        onClick={nextPage}
      >
        next {HiChevronDoubleRight}
      </button>
    </section>
  )
}
