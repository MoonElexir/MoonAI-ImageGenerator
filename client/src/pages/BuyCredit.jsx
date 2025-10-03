import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } =
    useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      descriptions: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } }
          );

          if (data.success === true) {
            loadCreditsData();
            navigate("/");
            toast.success("Credits Added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );

      if (data.success === true) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className=" text-center pt-14 ">
        <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 ">
          Our Plans
        </button>
        <h1 className="text-center text-4xl font-medium mb-6 sm:mb-10 ">
          Choose the plan
        </h1>
      </div>

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

            <button
              onClick={() => paymentRazorpay(plan.id)}
              className="bg-black text-white px-15 py-2 rounded-xl mt-15 m-8 hover:bg-gray-900 cursor-pointer "
            >
              {user ? "Buy Credits" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuyCredit;
