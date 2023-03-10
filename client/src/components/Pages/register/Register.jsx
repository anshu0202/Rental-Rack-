
import {Dialog} from '@mui/material'
import { useState } from 'react';
import {authenticateSignup} from '../../../service/api'


import './register.css'




const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}


const Register=()=>{

       const ImgUrl="https://img.freepik.com/free-vector/data-analysis-business-concept-doodle-analysts-office-people-work-together-research-statistics-charts-graphs-diagrams-sales-management-operational-reports-line-art-vector-illustration_107791-9818.jpg?w=2000"

        const [signup,setSignup]=useState(signupInitialValues);

        const userSignup= async()=>{
                console.log("values are ",signup)
               let res= await authenticateSignup(signup);
               if(!res){
                return 
               } 
               console.log("registeration is successful")
        }


        const onInputChange=(e)=>{
            setSignup({...signup,[e.target.name]:e.target.value});
        }

    return (
      
                <div className='container'>
                    
                    <div className='leftSide col'>
                            <img src={ImgUrl} alt="" />
                    </div>
                       <div className='rightSide col'>
                          <h2>REGISTRATION FORM</h2>

                            <div className='userInput'>
                                    <input type="text" onChange={(e)=>onInputChange(e)}  placeholder='First Name' name="firstname" />
                                    <input type="text" onChange={(e)=>onInputChange(e)}  placeholder='Last Name' name="lastname" />
                            </div>

                            <div className='userInput'>
                                    <input type="text"  onChange={(e)=>onInputChange(e)} placeholder='Username' name="username" />
                                    
                            </div>
                            <div className='userInput'>
                                    <input type="email" onChange={(e)=>onInputChange(e)}  placeholder='Email Address' name="email" />
                                    
                            </div>

                            <div className='userInput'>
                                    <input type="text" onChange={(e)=>onInputChange(e)}  placeholder='Phone Number' name="phone" />                 
                            </div>
                            <div className='userInput'>
                                    <input type="password" onChange={(e)=>onInputChange(e)}  placeholder='Password' name="password" />                                    
                            </div>
                            <div className='userInput'>
                                    <input type="password"  placeholder='Confirm Password' />                                    
                            </div>


                            <button  onClick={()=>userSignup()}  >Register</button>


                        </div> 

                </div>    
    )
}

export default Register;