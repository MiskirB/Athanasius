
import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Abebe Kebede",
    image: assets.profile_pic,
    email: "abebekebede@gmail.com",
    phone: "+251  123 456 7890",
    address: {
      line1: "Piassa,Addis Ababa",
      line2: "Bole,Addis Ababa",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name.includes("address")) {
  //     const [_, field] = name.split(".");
  //     setUserData((prevData) => ({
  //       ...prevData,
  //       address: {
  //         ...prevData.address,
  //         [field]: value,
  //       },
  //     }));
  //   } else {
  //     setUserData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };

  // const handleEditTrue = () => {
  //   setIsEdit(true);
  // };
  // const handleEditFalse = () => {
  //   setIsEdit(false);
  // };

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={assets.profile_pic} alt="" />
      {
      isEdit ? 
        <input
          className="font-medium bg-gray-100 text-3xl max-w-60 mt-4 rounded-mg"
          type="text" value={userData.name} onChange={e=>setUserData(prev = ({...prev,name:e.target.value}))}
          />
      : 
        <p className="font-medium text-3xl mt-4 text-neutral-800">
          {userData.name}{" "}
        </p>
      }

      <hr className="bg-zinc-400 border-none h-[1px]" />
      <div className="">
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Email Id: </p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? 
            <input
              className="bg-gray-100 max-w-52"
              type="text" value={userData.phone} onChange={e =>setUserData(prev => ({...prev,name:e.target.value}))}
          />
           : 
            <p className="text-blue-500">{userData.phone} </p>
          }
          <p className="font-medium">Address:</p>
          {isEdit ? 
            <p>
              <input className="bg-gray-100"
               onChange={(e)=>setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text"  
               />
              <br />
              <input className="bg-gray-100"
              onChange={(e)=>setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text"  
              />
            </p>
           : 
            <p className="text-gray-500">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          }
        </div>
      </div>

      <div className="">
        <p className="text-neutral-500 underline mt-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>
          {isEdit ? 
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e)=> setUserData(prev=> ({...prev,gender:e.target.value}))} value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
           : 
            <p className="text-gray-400">{userData.gender} </p>
          }
          <p className="font-medium">Birthday:</p>
          {isEdit ? 
            <input
              className="max-w-28 bg-gray-100"
              type="date" onChange={(e)=> setUserData(prev=> ({...prev,dob:e.target.value}))} value={userData.dob}
            />
           : 
            <p className="text-gray-400">{userData.dob} </p>
          }
        </div>
      </div>

      <div className="mt-10">
        {
        isEdit 
        ? <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        : 
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() =>  setIsEdit(true)}> Edit </button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
