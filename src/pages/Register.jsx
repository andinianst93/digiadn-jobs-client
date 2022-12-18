import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionContainer, FormRow } from '../components'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if ((!isMember && !name) || !email || !password) {
      toast.error('Please fill out all fields.')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user])
  return (
    <SectionContainer>
      <div>
        <form
          onSubmit={onSubmit}
          className='max-w-[500px] bg-white rounded-sm shadow-md p-4 m-[3rem] mx-auto'
        >
          <h2 className='ml-2 text-2xl font-bold text-center my-4'>
            <span className='text-sky-600'>DIGI</span>
            <span className='text-gray-800'>ADN</span>
          </h2>
          <h3 className='text-center font-bold text-xl mt-2'>
            {values.isMember ? 'Login' : 'Register'}
          </h3>
          <div className='mb-4'>
            {!values.isMember && (
              <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
              />
            )}
            <FormRow
              type='email'
              name='email'
              value={values.email}
              handleChange={handleChange}
            />
            <FormRow
              type='password'
              name='password'
              value={values.password}
              handleChange={handleChange}
            />
          </div>
          <div className='mx-auto text-center flex flex-col'>
            <button
              type='submit'
              disabled={isLoading}
              className='rounded-lg mx-auto max-w-fit bg-sky-600 px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700'
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
            <button
              type='submit'
              disabled={isLoading}
              className='mx-auto mt-2 rounded-lg max-w-fit text-sky-600 px-3 py-1 text-base font-semibold leading-7 bg-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:text-white hover:ring-sky-700'
              onClick={() =>
                dispatch(
                  loginUser({
                    email: 'demouser@test.com',
                    password: 'password',
                  })
                )
              }
            >
              {isLoading ? 'Loading...' : 'Demo App'}
            </button>
            <p className='mt-2 text-sm'>
              {values.isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
              <button
                type='button'
                onClick={toggleMember}
                className='underline text-sky-700'
              >
                {values.isMember ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </SectionContainer>
  )
}

export default Register
