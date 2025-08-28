import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=" border-t border-black  flex items-center justify-between gap-4 py-3 mt-20 ">
      <img src={assets.logo} width={75} className="mb-20" alt="" />
      <p className="felx-1 border-l border-black pl-4 text-sm text-gray-500 max-sm:hidden mb-20  pr-1 md:mr-120 lg:mr-190">
        Copyright @MoonAI | All right reserved.{" "}
      </p>

      <div className="flex gap-2.5 mb-20 ">
        <img src={assets.facebook_icon} alt="" width={35} />
        <img src={assets.twitter_icon} alt="" width={35} />
        <img src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  );
}
  
export default Footer
