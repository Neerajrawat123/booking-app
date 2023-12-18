import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/usercontext.js";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);
  const [isFormValid, setIsFormValid] = useState(true);
  console.log(user);

  useEffect(() => {
    if (user) {
      setName(user.username);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const bookThisPlace = async (ev) => {
    ev.preventDefault();
    const bookingData = {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
    };

    for (const key in bookingData) {
      if (bookingData[key] === "") {
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
      }
    }
    if (isFormValid) {
      const response = await axios.post("/api/booking", bookingData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const bookingId = response.data._id;

      if (bookingId) {
        setRedirect(`/account/bookings/${bookingId}`);
      }
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white shadow-xl p-4 h-88 rounded-2xl sticky top-48">
      <div className="text-2xl text-center">
        Price: ${place?.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4 ">
            <label>Check in:</label>
            <input
              type="date"
              placeholder="Check In"
              className="text-grey-600 px-1"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input
              type="date"
              placeholder="Check Out"
              className="text-grey-600 px-1"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
              required
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            placeholder="no. of guests"
            value={numberOfGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
            required
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              required
            />
            <label>Phone number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              required
            />
          </div>
        )}
      </div>
      <button
        onClick={bookThisPlace}
        className="w-full bg-red-600 mt-4 py-2 px-4 text-lg rounded-xl text-white"
      >
        Book this place
        {numberOfNights > 0 && <span> ${numberOfNights * place.price}</span>}
      </button>
    </div>
  );
}
