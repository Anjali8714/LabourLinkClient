import React from "react";

const Footer = () => {
  return (
    <div className="h-48">
      <div className="flex justify-between md:w-4/5 mx-auto mt-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-[#6300B3] font-postno ">
            Labour Link
          </h1>
          <p className="text-sm font-semibold text-[#333333] mt-5">
            Our jobs is to find you Mazdoor with <br /> at your door step on
            just a phone <br /> call with free of cost.
          </p>
        </div>
        <div className="flex justify-center items-center gap-20">
          <div>
            <h3 className="font-bold">About</h3>
            <p className=" text-sm font-semibold text-[#333333] mt-2">
              About Us <br />
              Features
            </p>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <p className=" text-sm font-semibold text-[#333333] mt-2">
              Why Labour Link? <br />
              FAQ
            </p>
          </div>
          <div>
            <h3 className="font-bold ">Get in Touch</h3>
            <p className=" text-sm font-semibold text-[#333333] mt-2">
              Question or feedback <br />
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className=" md:w-3/4 mx-auto flex justify-between items-center my-7">
        <div className="flex gap-5 ">
          <img
            src="public/assets/instagram.webp"
            alt="instagram"
            className="object-cover w-14 "
          />
          <img
            src="public/assets/facebook.png"
            alt="facebook"
            className="mt-2 object-cover w-10 h-9"
          />
        </div>
        <p className="rounded-full border border-black  w-56 h-10 px-12 py-2 mx-56 font-semibold">
          Email Address
          <img
            src="public/assets/send.png"
            alt="send"
            className="w-5 ml-32 -mt-5"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
