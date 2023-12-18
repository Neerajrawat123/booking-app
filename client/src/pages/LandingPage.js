import React, { useState } from "react";
import LandingbookingWidget from "../components/Landing-bookingWidget";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuParkingCircle } from "react-icons/lu";
import { GiWashingMachine } from "react-icons/gi";
import { GiCooler } from "react-icons/gi";
import { GiFireplace } from "react-icons/gi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiGrass } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function LandingPage() {
  const questionsData = [
    {
      question: "What is Airbnb and how does it work?",
      answer:
        "We verify personal profiles and listings to make sharing easy, enjoyable and safe for millions of Hosts and travellers worldwide. Find out more about Airbnb.",
    },
    {
      question: "How do I use search filters?",
      answer:
        "It’s easy to use our search filters to only show the listings that have the accessibility features you need. Learn more about using search filters and discover more flexible ways to search.",
    },
    {
      question:
        "What if I need to cancel due to a problem with the listing or Host?",
      answer:
        "It’s easy to use our search filters to only show the listings that have the accessibility features you need. Learn more about using search filters and discover more flexible ways to search.",
    },
    {
      question: "Need more information?",
      answer:
        "In most cases, you can resolve any issues directly by messaging your Host. If they cant help, simply contact Airbnb within 24 hours of discovering the issue. Learn more ",
    },
  ];

  const categoryData = [
    {
      name: "Houses",
      imageUrl: "images/catogary/2a8778ba-5a0b-45cd-986f-93fdb937f839.webp",
      desc: "If you need extra space, get an entire place all to yourself.",
    },
    {
      name: "Flats",
      imageUrl: "images/catogary/4603bd44-699a-4284-9b52-eebc49225879.webp",
      desc: "Stay in some of the most convenient locations with spaces in shared buildings.",
    },
    {
      name: "Rooms",
      imageUrl: "images/catogary/bda7107c-9683-49a7-8d5c-65d8dbcd3675.webp",
      desc: "Enjoy your own sleeping space and share a common area with others.",
    },
  ];

  const amentiesData = [
    { svg: <LiaSwimmingPoolSolid size={40} />, name: "Pool" },
    { svg: <LuParkingCircle size={40} />, name: "Free parking" },
    { svg: <GiWashingMachine size={40} />, name: "Washing machine" },
    { svg: <GiCooler size={40} />, name: "Ac" },
    { svg: <GiFireplace size={40} />, name: "Fireplace" },
    { svg: <PiTelevisionSimpleBold size={40} />, name: "TV" },
    { svg: <FaTemperatureHigh size={40} />, name: "Heating" },
    { svg: <GiGrass size={40} />, name: "Garden" },
  ];

  const CategoryCard = ({ category }) => (
    <div>
      <img className="rounded-xl" src={category.imageUrl} alt="" />
      <div className="pt-4 ">
        <button className="font-semibold text-lg">{category.name}</button>
        <p className=" mt-1 leading-4 text-gray-700 font-thin">
          {" "}
          {category.desc}
        </p>
      </div>
    </div>
  );

  const AmentiesCard = ({ amenties }) => (
    <div className="p-5  flex gap-4 items-center border border-gray-300 shadow-lg rounded-2xl">
      <div>{amenties.svg}</div>
      <div className="pb-3">
        <span className="font-semibold text-lg">{amenties.name}</span>
      </div>
    </div>
  );

  const QuestionCard = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className=" px-2 text-xl  border-b-2 pb-5 mb-6 ">
        <div className="flex justify-between">
          <p>{question.question}</p>
          {isOpen ? (
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <FaAngleUp />
            </button>
          ) : (
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <FaAngleDown />
            </button>
          )}
        </div>
        <div className={isOpen ? "" : "hidden"}>
          <div className="mt-5 text-gray-600">
            <p>{question.answer}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-10">
      <div className="px-12 py-8 relative">
        <div className="w-4/5 float-right pr-6 pt-4">
          <img
            className="border rounded-lg"
            src="/images/9caaca2d-6892-4638-b675-6a879974f5ed.webp"
            alt=""
          />
        </div>
        <div>
          <LandingbookingWidget />
        </div>
      </div>

      <div className=" w-full h-96 mt-4 ">
        <div className=" w-full  py-16 px-12 flex gap-2">
          <div className="w-1/3  px-2 py-3">
            <div className="w-[10%] mb-4">
              <img
                src="/images/7c7ccb34-a563-4f25-9fba-e4a46e2dbc3a.webp"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-2xl mb-2">
              Enjoy some flexibility
            </h1>
            <p className="text-xl">
              Stays with flexible cancellation make it easy to rebook if your
              plans change
            </p>
          </div>
          <div className="w-1/3  px-2 py-3">
            <div className="w-[10%] mb-4 ">
              <img
                src="images/a52e81a9-e390-4e74-b197-1aeeffd0e5ab.webp"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-2xl mb-2">
              More than 7M active listings
            </h1>
            <p className="text-xl">
              Join more than 1 billion guests who’ve found getaways in over 220
              countries and destinations.
            </p>
          </div>
          <div className="w-1/3 px-2 py-3">
            <div className="w-[10%] mb-4">
              <img
                src="/images/d51be571-b8cf-4379-8d3f-7c5e56c9def5.webp"
                alt=""
              />
            </div>
            <h1 className="font-semibold text-2xl mb-2">
              100+ filters for tailored stays
            </h1>
            <p className="text-xl">
              Pick your price range, the number of rooms you want and other key
              amenities to find the stay that fits your needs.
            </p>
          </div>
        </div>

        <div className="w-screen px-12 pt-4 pb-20 mt-8 ">
          <div>
            <h1 className="text-4xl font-semibold pb-10">
              Big, Small, we have it ALL
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {categoryData.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>
        </div>

        <div className="w-screen px-12 pt-4 pb-20 mt-8 ">
          <div>
            <h1 className="text-4xl font-semibold">
              Get specific with your favourite amenities
            </h1>
            <p className="py-2 text-lg text-gray-600">
              Choose from top features like these – and more – for a
              personalised stay.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 py-8">
            {amentiesData.map((amenties) => (
              <AmentiesCard amenties={amenties} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 px-8 py-12">
          <div className=" py-12 px-12 font-bold text-5xl">
            <h1>
              Your questions,
              <br /> answered
            </h1>
          </div>
          <div className="px-4">
            {questionsData.map((question) => (
              <QuestionCard question={question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
