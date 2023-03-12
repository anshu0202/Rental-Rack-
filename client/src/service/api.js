

import axios from 'axios'

// const URL="http://localhost:8000"
const URL="https://rentalapi2.onrender.com"



export const authenticateSignup= async(data)=>{

  try{
    // console.log("function has been called")
    console.log("data is ", data)
    const res= await axios.post(`${URL}/signup`, data);
      console.log("response from backend is ",res);
      return res;
  }
  catch(error){
    console.log("Error while calling signup api ", error.message)
  }

}


export const authenticateLogin= async(data)=>{
  console.log("login data is ",data);
         try{
       
          const res=await axios.post(`${URL}/login`, data);
            console.log("Response from login is ",res);
            return res;

         }
         catch(error){
          console.log("Error while calling Login api ", error.message);
         }
}

export const verifyEmail= async(data)=>{
          console.log("email is ",data);
          try{
            const res=await axios.post(`${URL}/email`, data);

            return res;
          }
          catch(error){
            console.log("Error while email verification ",error.message)
          }
}
export const updatePassword=async(data)=>{
  console.log("data is ", data);
     try{

      const res=await axios.put(`${URL}/updatePassword`, data);
      return res;
     }
     catch(error){
        console.log("error in updating password ",error.message);
     }
} 


