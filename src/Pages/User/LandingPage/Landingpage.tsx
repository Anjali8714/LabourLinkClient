import Footer from "../Footer/Footer";
import { BiLogIn } from "react-icons/bi";
import ProfileCard from "./ProfileCard";
import Works from "./Works";
import React from "react";

const Landingpage:React.FC = () => {
  return (
    <div className="h-screen relative bg-white">
      <div className="flex justify-between items-center px-10 py-10 ml-10">
        <h1 className="font-bold text-3xl text-[#6300B3] font-postno">
          Labour Link
        </h1>

        <div className="space-x-4">
          <button className="px-4 py-2 font-semibold">Sign In</button>
          <button className="relative px-4 py-2 bg-[#6300B3] text-white font-semibold rounded-3xl w-28 h-12 hover:bg-[#4a0088] ">
            <div className="absolute -ml-1 ">
              <BiLogIn className="text-2xl " />
            </div>
            Join
          </button>
        </div>
      </div>

      <div className="text-center ">
        <h6 className="text-[#6300B3] font-semibold text-lg m-2">
          WHAT WE SERVE
        </h6>
        <h1 className="font-bold text-5xl">
          Your Favorite Labour <br /> Finding partner
        </h1>
      </div>

      <div className="bg-[#788295] w-2 h-2 ml-96"></div>
      <div className="bg-[#F2C94C] w-4 h-2 ml-auto mr-96 -mt-16"></div>

      <div className="mt-28 grid grid-cols-3">
        <div className="text-center">
          <img
            src="public/assets/pic1.png"
            alt="Easy To Access"
            className="w-60 mx-auto"
          />
          <h6 className="font-bold">Easy To Access</h6>
          <p className="text-gray-600 font-semibold">
            You only need a few steps in <br /> getting labour at doorstep.
          </p>
        </div>

        <div className="text-center">
          <img
            src="public/assets/pic2.png"
            alt="Free of Cost"
            className="w-60 mx-auto mt-9"
          />
          <h6 className="font-bold">Free of Cost</h6>
          <p className="text-gray-600 font-semibold">
            No Middle man charges this <br /> process is totalyy Free.
          </p>
        </div>

        <div className="text-center">
          <img
            src="public/assets/pic3.png"
            alt="Best Quality"
            className="w-64 mx-auto"
          />
          <div className="bg-[#788295] w-2 h-2 rounded-full mr-96 "></div>
          <h6 className="font-bold">Best Quality</h6>
          <p className="text-gray-600 font-semibold">
            Not only fast for us quality is also <br />
            number one.
          </p>
        </div>
      </div>

      <h1 className="font-bold text-3xl text-[#6300B3] font-postno ml-48 mt-24  ">
        Labour Link
      </h1>
      <div className="flex justify-betweem items-center">
        <p className=" text-4xl font-bold ml-48 py-9">
          Labour That is Always available <br /> for you
        </p>
        <img
          src="public/assets/pic4.png"
          alt="asdfghjkl"
          className="ml-auto  md:ml-80 -mt-20 object-cover w-72 h-72"
        />
      </div>

      <div className="grid grid-cols-4 m-20 gap-16 mx-auto w-3/4">
        <Works
          imageUrl="public/assets/electrician.jpg"
          work="Electrician"
          type="Labour"
          noOf="700"
        />
        <Works
          imageUrl="public/assets/plumber.jpg"
          work="Plumber"
          type="Labour"
          noOf="700"
        />
        <Works
          imageUrl="public/assets/painter.jpg"
          work="Painting"
          type="Labour"
          noOf="500"
        />
        <Works
          imageUrl="public/assets/concrete.jpg"
          work="Concrete"
          type="Labour"
          noOf="400"
        />
        <Works
          imageUrl="public/assets/cleaning.jpg"
          work="Cleaning"
          type="Labour"
          noOf="500"
        />
        <Works
          imageUrl="public/assets/carservice.jpg"
          work="Car Service"
          type="Labour"
          noOf="500"
        />
        <Works
          imageUrl="public/assets/gardening.jpg"
          work="Gardening"
          type="Labour"
          noOf="300"
        />
        <Works
          imageUrl="public/assets/homeappliancerepair.jpg"
          work="HomeApplianceRepair"
          type="Labour"
          noOf="300"
        />
      </div>
      <div className="w-full md:w-3/4 grid grid-col-1  sm:grid-cols-2  md:grid-cols-3 gap-8 mx-auto">
        <ProfileCard
          id="1"
          name="Madhavan"
          location="Kondotty,Malappuram"
          rating={4.0}
          jobTitles={["Plumber", "Electrician"]}
          imageUrl="Public/assets/Person.png"
        />
        <ProfileCard
          id="1"
          name="Madhavan"
          location="Kondotty,Malappuram"
          rating={4.0}
          jobTitles={["Plumber", "Electrician"]}
          imageUrl="Public/assets/Person.png"
        />
        <ProfileCard
          id="1"
          name="Madhavan"
          location="Kondotty,Malappuram"
          rating={4.0}
          jobTitles={["Plumber", "Electrician"]}
          imageUrl="Public/assets/Person.png"
        />
        <ProfileCard
          id="1"
          name="Madhavan"
          location="Kondotty,Malappuram"
          rating={4.0}
          jobTitles={["Plumber", "Electrician"]}
          imageUrl="Public/assets/Person.png"
        />
        <ProfileCard
          id="1"
          name="Madhavan"
          location="Kondotty,Malappuram"
          rating={4.0}
          jobTitles={["Plumber", "Electrician"]}
          imageUrl="Public/assets/Person.png"
        />
        <ProfileCard
          id="1"
          name="Madhavan"
          location="Kondotty,Malappuram"
          rating={4.0}
          jobTitles={["Plumber", "Electrician"]}
          imageUrl="Public/assets/Person.png"
        />
      </div>
      <Footer />
      <div className="bg-[#9b7ab6] w-full h-10 mt-4"></div>
    </div>
  );
};

export default Landingpage;
