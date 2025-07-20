import React, { useState } from "react";             
import axios from "../api/axiosInstance";            

export const LoginPage = () => {

    const [formData, setFormData] = useState({email: "", password: ""})
    const handleFormData = (e)=>{
        setFormData((pre)=> {
            return {
                ...pre, [e.target.name]: e.target.value
            }
        })
    }

  const handleSubmit = async(e)=>{
         e.preventDefault(); 
         console.log(formData);
         try {
            const res = await axios.post("users/login", formData); 
            console.log("Login Success", res.data);
            
         } catch (error) {
             console.log("Login failed", error.response.data.message);
         }     
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            type="email"
            name="email"
            id="email"
            className="border-2"
            onChange={handleFormData}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            type="password"
            name="password"
            id="password"
            className="border-2"
            onChange={handleFormData}
          />
        </div>
        <button type="submit" className="cursor-pointer border-2 border-gray-400 bg-gray-400 rounded p-1 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};
