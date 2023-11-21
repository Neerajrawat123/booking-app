import React, { useContext } from 'react'
import { UserContext } from '../context/usercontext'
import {Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function Account() {
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)
  let {subpage} = useParams()
  console.log(user)

  if (subpage== undefined) {
    subpage = 'profile'
    
  }

  const logout = async () =>{
    await axios.post('http://localhost:8000/api/logout')
    setUser(null)
    navigate('/')
    
  }



  const linkClasses = (type = null) =>{
   let  classes= 'py-2 px-6 rounded-full'

    if (type===subpage) {
      classes = 'py-2 px-6 bg-red-800 text-white rounded-full'
      
    }
    return classes
  }

  return (
    <div>
      <nav className='w-full flex justify-center'>
        <Link className={linkClasses('profile')} to={'/api/account/profile'}>My profile</Link>
        <Link className={linkClasses('booking')} to={'/api/account/booking'}> Booking</Link>
        <Link className={linkClasses('places')} to={'/api/account/places'}>Places</Link>
        </nav>

        {
          subpage && (
            <div className='text-center max-w-lg mx-auto'> 
            {/* logged in as a {user[0]?.username} {user[0]?.email} <br/> */}
            <button className='w-full mt-4 bg-red-700 rounded-full text-white' onClick={logout}>Logout</button>
            </div>
          )
        }

    </div>
  )
}