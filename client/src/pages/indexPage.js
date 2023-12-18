import React, { useState, useEffect, useContext } from "react";
import Image from "../components/image";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/usercontext";
import LandingPage from "./LandingPage";
import CategoryCarousel from "../components/CategoryCard";
import { categories } from "../constants/categories";
import FilterBtn from "../components/FilterBtn";
import ToggleBtn from "../components/ToggleBtn";

function IndexPage() {
  const [places, setPlaces] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get("/api/places/").then((res) => {
      setPlaces(res.data);
    });
  }, []);
  
  console.log(places)
  return (
    <>
      {!user ? (
        <LandingPage />
      ) : (
        <div className="">
          <div className="">
            <div className="w-full flex py-4 sticky top-20 bg-white border-b-2 ">
              <div className="w-[60%]">
                <CategoryCarousel>
                  {categories.map((category) => (
                    <div className="flex flex-col items-center justify-center min-w-max text-gray-500">
                      <div className="text-center flex justify-center">
                        {" "}
                        {category.svg}
                      </div>

                      <span>{category.name}</span>
                    </div>
                  ))}
                </CategoryCarousel>
              </div>
              <FilterBtn />

              <ToggleBtn />
            </div>

            <div className=" grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 mt-20 py-8">
              {places.length > 0 &&
                places.map((place) => (
                  <Link to={"place/" + place._id}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                      {place.photos?.[0] && (
                        <Image
                          className="rounded-2xl object-cover aspect-square"
                          src={place.photos?.[0]}
                          alt=""
                        />
                      )}
                    </div>
                    <h2 className="font-bold">{place?.address}</h2>
                    <h3 className="text-sm text-gray-500 leading-4 mb-2">{place?.title}</h3>
                    <div className="mt-1">
                      <span className="font-semibold text-lg">${place?.price}</span> per
                      night
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndexPage;
