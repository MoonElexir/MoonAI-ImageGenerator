import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { Router, useNavigate } from "react-router-dom";

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = ()=>{

    if(user){
      navigate('/result');
    }
    else{
      setShowLogin(true);
    }

  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2   bg-white px-6 py-1 rounded-full border border-neutral-500 "
        initial={{ opacity: 0.2, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay : 0.2,  duration:0.8}}
      >
        <p> Best Text to Image Genrator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center font-sans ">
        Turn your ideas into <span className="text-blue-900"> Images</span> in
        seconds
      </h1>

      <p className="text-center max-w-xl mx-auto mt-5">
        Unleash your creativity with MoonAI. Our cutting-edge AI transforms your
        text prompts into unique, stunning images. Simply describe your vision,
        and watch as MoonAI brings it to life.
      </p>

      <button onClick={onClickHandler} className=" sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full ">
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </button>

      <div className=" flex flex-wrap flex-row justify-center mt-16 gap-3 ">
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_4}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_5}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_7}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 border-black border-s"
          src={assets.sample_img_16}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_8}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_10}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_11}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_12}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_13}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_14}
          alt=""
        />
        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_15}
          alt=""
        />

        <img
          className=" size-50 rounded hover:scale-105 transition-all duration-300 "
          src={assets.sample_img_6}
          alt=""
        />
      </div>
      <p className="mt-2  text-neutral-600">Generated images from Moon AI</p>
    </motion.div>
  );
};

export default Header;
