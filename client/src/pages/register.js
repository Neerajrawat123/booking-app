import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from "axios";


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')



    const handleRegisterSubmit = async (ev) => {
        ev.preventDefault()
        const data =  await axios.post('/register',{
            username,
            email,
            password
           })

           setEmail('')
           setUsername('')
           setPassword('')
        

        
        
    }


  return (
    <div className=" grow flex items-center justify-around mt-20">
    <div className="mb-64 w-full py-6">
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <form className="max-w-md mx-auto flex  flex-col justify-between" onSubmit={handleRegisterSubmit}> 
      <input type="text"
        className='mb-4 p-4 border rounded-2xl'
               placeholder="username"
               value={username}
               onChange={ev => setUsername(ev.target.value)} />

        <input type="email"
        className='mb-4 p-4 border rounded-2xl'
               placeholder="your@email.com"
               value={email}
               onChange={ev => setEmail(ev.target.value)} />
        <input type="password"
        className='p-4 mb-4 border rounded-2xl'
               placeholder="password"
               value={password}
               onChange={ev => setPassword(ev.target.value)} />
                
        <button className="bg-red-600 text-white py-2 rounded">Register</button>
        <div className="text-center py-2 text-gray-500">
          Do have an account yet? <Link className="underline text-black" to={'/login'}>Login</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register