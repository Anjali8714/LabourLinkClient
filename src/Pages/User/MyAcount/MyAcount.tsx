import React from "react";

interface UserInfo {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
}

const AccountPage: React.FC<UserInfo> = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-[#6300B3] font-postno px-10 py-10">
          Labour Link
        </h1>
      </div>
      <div className="px-10 ml-24 w-10/12">
        <h1 className="text-2xl uppercase my-6 font-normal">MY ACCOUNT</h1>
        <hr />
        <h2 className="text-2xl uppercase my-4 font-bold ml-64">
          account overview
        </h2>
        <div className="flex">
          <div>
            <div className="border border-gray-200 p-6  cursor-pointer hover:bg-gray-50 text-lg">
              Personal Information
            </div>
            <div className="border border-gray-200 p-6  cursor-pointer hover:bg-gray-50 text-lg">
              Previous Work
            </div>
            <div className="border border-gray-200 p-6 mb-3 cursor-pointer hover:bg-gray-50 text-lg">
              Change Password
            </div>
          </div>

          <div className="max-w-lg mx-8 border rounded-lg">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4 bg-[#FEFAF4] p-6">Personal Information</h2>
            <div className="space-y-2 text-sm p-3">

            <div className="flex p-2">
              <span className="font-medium w-40">Name</span>
              <span className="font-medium">:</span>
              <span className="ml-2"></span>
            </div>
            <div className="flex p-2">
              <span className="font-medium w-40">Date of birth</span>
              <span className="font-medium">:</span>
              <span className="ml-2"></span>
            </div>
            <div className="flex p-2">
              <span className="font-medium w-40">Phone number</span>
              <span className="font-medium">:</span>
              <span className="ml-2"></span>
            </div>
            <div className="flex p-2">
              <span className="font-medium w-40">Email address</span>
              <span className="font-medium">:</span>
              <span className="ml-2"></span>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>

   
  );
};

export default AccountPage;
