import React, { useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const LabourProfile: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [about, setAbout] = useState<string>("");

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const profileInputRef = useRef<HTMLInputElement | null>(null);
  const [workImages, setWorkImages] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);
  const workInputRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  const handleProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleWorkImages = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.files && event.target.files[0]) {
      const updatedImages = [...workImages];
      updatedImages[index] = URL.createObjectURL(event.target.files[0]);
      setWorkImages(updatedImages);
    }
  };

  const [selectedSkills, setSelectedSkills] = useState<
    { value: string; label: string }[]
  >([]);
  const skillsOptions = [
    { value: "Plumbing", label: "Plumbing" },
    { value: "Carpentry", label: "Carpentry" },
    { value: "Electrician", label: "Electrician" },
    { value: "Painter", label: "Painter" },
    { value: "Concrete", label: "Concrete" },
    { value: "Cleaning", label: "Cleaning" },
    { value: "Car Service", label: "Car Service" },
    { value: "Gardening", label: "Gardening" },
    { value: "Home Appliance Repair", label: "Home Appliance Repair" },
  ];

  const [selectedMunicipalities, setSelectedMunicipality] = useState<
    { value: string; label: string }[]
  >([]);
  const municipalityOptions = [
    { value: "Municipality 1", label: "Municipality 1" },
    { value: "Municipality 2", label: "Municipality 2" },
    { value: "Municipality 3", label: "Municipality 3" },
  ];

  const handleRegister = () => {
    navigate("/myacount");
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="font-bold text-3xl text-[#6300B3] font-postno mb-8">
        Labour Link
      </h1>
      <div className="mb-8">
        <h2 className="font-semibold text-xl">Profile</h2>
        <p className="mt-2 text-[#7E7E7E] ">
          Find the best talent for your company
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="space-y-6">
          <div>
            <label className="font-bold block mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              placeholder="Enter your full name"
              onChange={(e) => setFullName(e.target.value)}
              className="border border-gray-500 rounded-md w-60 px-4 py-2"
            />
          </div>

          <div>
            <label className="font-bold block mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNo"
              value={phoneNo}
              placeholder="Enter your Phone number"
              onChange={(e) => setPhoneNo(e.target.value)}
              className="border border-gray-500 rounded-md w-60 px-4 py-2"
            />
          </div>

          <div className="py-5">
            <div className="rounded-lg border  w-52 h-52 shadow-[1px_4px_6px_rgb(192,192,192)]">
              <h3 className="text-sm font-bold font-serif text-center mt-3">
                Upload your image
              </h3>
              <div className="relative rounded-xl border border-[#4B2A7D] w-36 h-24 m-auto mt-4 flex items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <MdOutlineFileUpload className=" w-10 h-10 text-gray-500" />
                )}
              </div>
              <button
                className="bg-[#9747FF] rounded-2xl w-24 h-8 text-white font-serif mt-3 ml-12"
                onClick={() => profileInputRef.current?.click()}
              >
                Add image
              </button>
              <input
                type="file"
                accept="image/*"
                ref={profileInputRef}
                onChange={handleProfileImage}
                className="overflow-x-auto hidden"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 ">
          <div>
            <label className="block font-bold mb-2">Skills</label>
            <div className="relative w-60">
              <Select
                options={skillsOptions}
                isMulti
                value={selectedSkills}
                onChange={(selected) =>
                  setSelectedSkills(
                    selected as { value: string; label: string }[]
                  )
                }
                placeholder="Select skills..."
                className="w-80"
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Municipality</label>
              <Select
                options={municipalityOptions}
                isMulti
                value={selectedMunicipalities}
                onChange={(selected) =>
                  setSelectedMunicipality(
                    selected as { value: string; label: string }[]
                  )
                }
                placeholder="Selected municipality..."
                className="w-80"
              />
            </div>

            <div className="mt-8 w-full">
              <label className="block font-bold mb-2">
                Best three work images
              </label>
              <div className="flex flex-row space-x-4 w-[700px] p-4">
                {workImages.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg w-52 h-52  shadow-[1px_4px_6px_rgb(192,192,192)]"
                  >
                    <h3 className="text-sm font-bold font-serif text-center mt-3">
                      Upload
                    </h3>
                    <div className="relative rounded-xl border border-[#4B2A7D] w-36 h-24 m-auto mt-4 flex items-center justify-center">
                      {image ? (
                        <img
                          src={image}
                          alt={`work ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <MdOutlineFileUpload className=" w-10 h-10 text-gray-500" />
                      )}
                    </div>
                    <button
                      className="bg-[#9747FF] rounded-2xl w-24 h-8 text-white font-serif mt-3 ml-12"
                      onClick={() => workInputRefs[index].current?.click()}
                    >
                      Add image
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={workInputRefs[index]}
                      onChange={(event) => handleWorkImages(event, index)}
                      className="hidden"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label>About your self</label>
            <textarea
              name="about"
              value={about}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setAbout(e.target.value)
              }
              className="border border-gray-300 w-full h-40 px-4 py-2"
              placeholder="About your self"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="bg-[#6300B3] text-white rounded-xl px-8 py-2"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LabourProfile;
