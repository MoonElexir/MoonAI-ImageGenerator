import React, { useContext, useState } from 'react'
import { assets, plans } from '../assets/assets'
import {AppContext} from '../context/AppContext';

const Card = () => {

    const {user} = useContext(AppContext);

  return (
    <div className="flex flex-col sm:flex-row  items-center justify-center gap-7 mt-20 ">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="border rounded-xl bg-white min-h-80 drop-shadow-sm text-gray-700 hover:scale-105 transition-all"
        >
          <img className="w-15 ml-4 mt-5" src={assets.logo} alt="" />
          <h2 className="ml-5 mt-5  text-2xl text-black  ">{plan.id}</h2>
          <p className="ml-5 mb-4   ">{plan.desc}</p>
          <div className="flex flex-row mt-5">
            <p className="text-2xl ml-5 text-black">{`$${plan.price}/  `}</p>
            <p className="mt-2">{plan.credits} credits</p>
          </div>
         
            <button className="bg-black text-white px-15 py-2 rounded-xl mt-15 m-8 hover:bg-gray-900 cursor-pointer ">
              {user ? 'Buy Credits' : 'Get Started'}
            </button>
          
        </div>
      ))}
    </div>
  );
}

export default Card
