import React,{useState, useEffect} from 'react'
import Account from '../components/accountNav';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import Perks from '../components/perks';
import PhotosUploader from '../components/photosUploader';

function AddPlacesForm() {

    const {id} = useParams();
    const navigate = useNavigate()
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [price,setPrice] = useState(100);
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
        return
        
    }
    axios.get('/places/'+id).then(response => {
        const {data} = response;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.photos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setMaxGuests(data.maxGuests);
        setPrice(data.price);
     });
   }, [id]);


  


    const inputHeader =(text) =>{
        return ( <h1 className='text-2xl mt-2'> {text}</h1>)
    }

    const inputDescription =(text) =>{
        return (<p className='text-grey-500 text-sm'> {text}</p>)
    }

    const preInput = (header,description) => {
        return (
            <>
              {inputHeader(header)}
              {inputDescription(description)}
            </>
          );

    }

    const savePlace = async (ev) =>{
        ev.preventDefault()
        const placesData  = {title, address, description, extraInfo, checkIn, checkOut, maxGuests, price}

        try {
          if (id) {
            // await axios.put('http://localhost:8000/api/places', { id, ...placesData });
          } else {
            await axios.post('/api/places', placesData
            , {headers: {
              'Content-type': 'application/json'
            }});
          }
    
          // Navigate after successful save
          navigate('/places');
        } catch (error) {
          console.error('Error saving place:', error);
        }
    }

    
  return (
    <div>
        <Account />
      <form onSubmit={savePlace}>
        {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt"/>
        {preInput('Address', 'Address to this place')}
        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>
        {preInput('Photos','more = better')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {preInput('Description','description of the place')}
        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
        {preInput('Perks','select all the perks of your place')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput('Extra info','house rules, etc')}
        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
        {preInput('Check in&out times','add check in and out times, remember to have some time window for cleaning the room between guests')}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input type="text"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}
                   placeholder="14"/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input type="text"
                   value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}
                   placeholder="11" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="number" value={maxGuests}
                   onChange={ev => setMaxGuests(ev.target.value)}/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" value={price}
                   onChange={ev => setPrice(ev.target.value)}/>
          </div>
        </div>
        <button className="primary my-4" type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddPlacesForm