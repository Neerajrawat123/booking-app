import React, { useState } from 'react'
import Account from '../components/accountNav'
import {Link } from 'react-router-dom'

function PlacesPage() {
  const [places, setPlaces ] = useState([])
  return (
    <div className='mt-40'>
        
        <div className="mt-4">
          {places?.length > 0 && places?.map(place => (
            <Link to={'/account/places/'+place?._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
              <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place?.title}</h2>
                <p className="text-sm mt-2">{place?.description}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
        
    
  )
}

export default PlacesPage