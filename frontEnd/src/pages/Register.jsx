import React, { useState } from 'react'
import axios from '../api/axiosInstance'
export const Register = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        password: ""
    })
    const handleFormData =(e)=>{
      setFormData((pre)=>{
            return{
                ...pre, [e.target.name]: e.target.value
            }
      })
    }
    const handleSubmit = async(e)=>{
         e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post("users/register", formData)
            console.log("Registerd", res.data);
            
        } catch (error) {
            console.error("Error", error.response.data.message); 
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name: </label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleFormData} className='border-2 mt-3'/>
            </div>
            <div>
                <label htmlFor="email">email: </label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData} className='border-2 mt-3'/>
            </div>
            <div>
                <label htmlFor="password">password: </label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} className='border-2 mt-3' />
            </div>
            <button type="submit" className="cursor-pointer border-2 border-gray-400 bg-gray-400 rounded p-1 mt-2">Submit</button>
        </form>
    </div>
  )
}
