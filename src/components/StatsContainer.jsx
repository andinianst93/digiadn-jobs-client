import React from 'react'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: 'text-yellow-900',
      bcg: 'bg-yellow-100',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: 'text-sky-900',
      bcg: 'bg-sky-100',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: 'text-red-900',
      bcg: 'bg-red-100',
    },
  ]

  return (
    <section className='grid gap-x-[2rem] md:grid md:grid-cols-2 md:gap-y-[1rem] lg:grid-cols-3 lg:gap-y-[1rem]'>
      {defaultStats.map((i, index) => {
        return <StatItem key={index} {...i} />
      })}
    </section>
  )
}

export default StatsContainer
