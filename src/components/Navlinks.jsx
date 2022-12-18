import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='pt-[2rem] flex flex-col'>
      {links.map((i) => {
        const { id, text, path, icon } = i
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) => {
              return isActive
                ? 'flex items-center p-[1rem] capitalize text-yellow-500'
                : 'flex items-center text-gray-50 p-[1rem] capitalize'
            }}
          >
            <span className='text-xl mr-[1rem] grid place-items-center'>
              {icon}
            </span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
