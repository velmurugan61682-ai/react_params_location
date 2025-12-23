import React, { useState } from 'react';

const ProfileCard=()=> {
  const [profilecard,setProfilecard]=useState([]);

  const fetchProfiles=async()=>{
    const cards=await fetch("/main.json"); 
    const data=await cards.json();
    setProfilecard(data.profileid); 
    console.log(data.profileid); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Team Profiles</h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={fetchProfiles}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Load Profiles
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {profilecard.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-5 text-center hover:scale-105 transition-transform"
          >
            <img
              src={user.image||`https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />

            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.role}</p>
            <p className="text-sm mt-1">{user.email}</p>
            <p className="text-sm text-gray-600">{user.city}</p>

            <div className="mt-2">
              <strong>Skills:</strong>
              <p className="text-sm text-gray-700">{user.skills.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;