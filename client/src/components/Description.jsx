import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-row justify-center gap-5">
        <img
          className="w-80 xl:w-96 rounded-lg h-120"
          src={assets.sample_img_17}
          alt=""
        />
        <img
          className="w-80 xl:w-96 rounded-lg h-120"
          src={assets.sample_img_20}
          alt=""
        />
        <img
          className="w-80 xl:w-96 rounded-lg h-120"
          src={assets.sample_img_19}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-center text-2xl my-5 ">
          Introducing the <span className='text-amber-500'>AI-Powered</span> Text to Image Generator
        </h2>
        <p className=" text-center font-serif ">
          Step into a new era of digital creativity with our text-to-image AI
          generator. Simply describe your vision in words, and our intelligent
          system will transform your text into beautiful, unique images. From
          photorealistic scenes to fantastical landscapes, unlock your artistic
          potential and bring your wildest dreams to the screen.
        </p>
      </div>
    </div>
  );
}

export default Description
