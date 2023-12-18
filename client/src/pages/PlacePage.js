import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceGallery from "../components/PlaceGallery";
import AddressLink from "../components/AddressLink";
import BookingWidget from "../components/BookingWidget";
import { IoIosStar } from "react-icons/io";
import PlaceOwnerSec from "../components/PlaceOwnerSec";

import { FaChevronRight } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { amenities } from "../constants/amenties";
import { pl } from "date-fns/locale";

function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  let info = new String(place?.extraInfo);
  const slicedINfo = info?.slice(0, 522);

  useEffect(() => {
    axios.get(`/api/place/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, []);

  const ReviewCard = () => (
    <div className="">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img
            src="/images/user/charles-etoroma-95UF6LXe-Lo-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-lg ">Sachin</span>
          <span className="leading-4 font-[300]">Mumbai, India</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="w-14 flex items-center">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="font-mono text-sm">2 weeks ago</div>
      </div>
      <div className="py-[2px]">
        <p>
          The cleanliness and attention to detail truly stood out, making it
          comfortable and enjoyable experience. The Open bath tub and outdoor
          seating area added a special
        </p>
      </div>
      <div className="py-3">
        <button className="font-[450] border-b-2 border-black leading-5 text-lg">
          Show more
        </button>
      </div>
    </div>
  );
  return (
    <div className="mt-20 bg-gray-100  px-20 pt-8">
      <div className="pb-8">
        <h1 className="text-3xl font-bold">{place?.title}</h1>
      </div>
      <PlaceGallery place={place} />

      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <AddressLink>
            {place?.address}
            <div className="flex font-[400] text-base gap-2 text-gray-700">
              <span> {place?.maxGuests} guests</span>
              <span> {place?.bedrooms} bedrooms</span>
              <span> {place?.beds} beds</span>
              <span>{place?.bathrooms} bathrooms </span>
            </div>
          </AddressLink>
          <div className="font-[500]  flex items-center gap-1 py-2">
            <IoIosStar />
            <p className="leading-4 border-b-[1.5px] border-black">2 reveiws</p>
          </div>
          <PlaceOwnerSec />

          <div className="text-lg text-gray-700 border-b-[1.5px] py-8">
            <div>{slicedINfo}...</div>
            <div className="py-2">
              <button className="font-bold  leading-5 flex items-center gap-1">
                <span className="border-b-2 border-black">Show more</span>
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="py-7 border-b-[1.5px]">
            <div className="font-semibold text-2xl">
              <h3>What this place has offers</h3>
            </div>
            <div className="grid grid-cols-2 py-5 gap-y-5">
              {amenities.map((amenity) => (
                <div className="flex text-lg gap-3 items-center">
                  <span>{amenity.svg}</span>
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>

            <div className="py-4">
              <button className="border border-black px-5 py-2 text-lg font-semibold rounded-lg hover:bg-slate-200">
                Show all amenities
              </button>
            </div>
          </div>
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t h-96">
        <div>
          <div className="flex gap-3 items-center font-semibold text-xl border-b-[1.5px] py-8">
            <div className="flex items-center gap-1">
              <IoIosStar />
              <span>Stars</span>
            </div>
            <div>
              <span>4 reviews</span>
            </div>
          </div>
          <div className="py-6 b">
            <div className="grid grid-cols-2 py-8 gap-y-10">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="py-4  border-b-[1.5px]">
              <button className="border border-black px-5 py-2 text-lg font-semibold rounded-lg hover:bg-slate-200">
                Show all reviews
              </button>
            </div>
          </div>
        </div>

        {/* /* things to know */}

        <div>
          <div className="font-semibold text-2xl">
            <h2>Things to know</h2>
          </div>
          <div className="grid grid-cols-3 py-4">
            <div>
              <div>
                <h3>Things to know</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
