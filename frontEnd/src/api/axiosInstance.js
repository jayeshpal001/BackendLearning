// fetch("http://localhost:5000/api/users/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ email, password })
// })
// .then(res => res.json())
// .then(data => console.log(data));

import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/", 
    withCredentials: true,  // Yaha cookie send ho raha hai
})

export default instance

