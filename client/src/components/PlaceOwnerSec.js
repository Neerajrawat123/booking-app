import React from "react";
import { BsDoorClosed, BsDoorClosedFill, BsHouseDoor } from "react-icons/bs";

function PlaceOwnerSec() {
  return (
    <div>
      <div className="mt-7 border-b-[1.5px] border-t-[1.5px] py-4 ">
        <div className="flex gap-6 items-center ">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/images/4725456c-0939-449d-bdb0-e225a41abdf6.webp"
              alt=""
            />
          </div>
          <div>
            <div className="text-lg font-semibold">
              <span>Hosted by Neeraj</span>
            </div>
            <div className="flex gap-4 text-gray-600 font-[400]">
              <span>SuperHost</span>
              <span>6 month hosting</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1.5px] py-6">
        <div className="flex flex-col gap-7">
          <div className="flex gap-12">
            <div className="">
              <BsDoorClosed size={28} />
            </div>
            <div>
              <span className="text-lg font-semibold">Self check-In</span>
              <p className="text-gray-700">
                You can check in with the building staff
              </p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="">
              <BsDoorClosed size={28} />
            </div>
            <div>
              <span className="text-lg font-semibold">Self check-In</span>
              <p className="text-gray-700">
                You can check in with the building staff
              </p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="">
              <BsDoorClosed size={28} />
            </div>
            <div>
              <span className="text-lg font-semibold">Self check-In</span>
              <p className="text-gray-700">
                You can check in with the building staff
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOwnerSec;
