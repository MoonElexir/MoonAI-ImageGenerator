import React from 'react'
import Card from '../context/Card'

const BuyCredit = () => {
  return (
    <>
      <div className=" text-center pt-14  ">
        <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 ">
          Our Plans
        </button>
        <h1 className="text-center text-4xl font-medium mb-6 sm:mb-10 ">
          Choose the plan
        </h1>
      </div>
      <Card/>
    </>
  );
}

export default BuyCredit
