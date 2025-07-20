
import { useState } from 'react'
import { useEffect } from 'react';
import axios from '../api/axiosInstance';
export const Profile = () => {
const[profile, setProfile] = useState(null); 


useEffect(()=>{
  const fetchData =async ()=>{
     try {
      const res = await axios.get("/users/me")
      setProfile(res.data.user); 
     } catch (error) {
      console.error("error occer in fetchData");
      
     }
  }
  fetchData(); 
}, [])

console.log("Data from profile", profile);


  return (
    <div>
       <h1>{profile?._id}</h1>
       <h1>{profile?.name}</h1>
       <h1>{profile?.email}</h1>
    </div>
  )
}
