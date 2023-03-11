
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

//        const ImgUrl="https://img.freepik.com/free-vector/data-analysis-business-concept-doodle-analysts-office-people-work-together-research-statistics-charts-graphs-diagrams-sales-management-operational-reports-line-art-vector-illustration_107791-9818.jpg?w=2000"
        //  const ImgUrl="https://cdn2.hubspot.net/hubfs/5242301/Blog%20Images/Happy%20Employee%20Dovetail%20Employee%20Portal.jpg" 
        const ImgUrl="https://img.freepik.com/free-vector/telework-concept-illustration_114360-5389.jpg?w=2000"       
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
      
                <div className='Container'>
                    
                    <div className='leftSide '>
                            <img src={ImgUrl} alt="" />
                            <div className="transparent-layer"></div>
                    </div>
                       <div className='rightSide '>


                        <form className='signupForm'>
                                

                          <h2>REGISTRATION FORM</h2>

                            <div className='signupuserInput'>
                                    <input type="text" onChange={(e)=>onInputChange(e)}  placeholder='First Name' name="firstname" />
                                   
                            </div>

                            <div className='signupuserInput'>           
                            <input type="text" onChange={(e)=>onInputChange(e)}  placeholder='Last Name' name="lastname" />
                            </div>
                            <div className='signupuserInput'>
                                    <input type="text"  onChange={(e)=>onInputChange(e)} placeholder='Username' name="username" />
                                    
                            </div>
                            <div className='signupuserInput'>
                                    <input type="email" onChange={(e)=>onInputChange(e)}  placeholder='Email Address' name="email" />
                                    
                            </div>

                            <div className='signupuserInput'>
                                    <input type="text" onChange={(e)=>onInputChange(e)}  placeholder='Phone Number' name="phone" />                 
                            </div>
                            <div className='signupuserInput'>
                                    <input type="password" onChange={(e)=>onInputChange(e)}  placeholder='Password' name="password" />                                    
                            </div>
                            <div className='signupuserInput'>
                                    <input type="password"  placeholder='Confirm Password' />                                    
                            </div>


                            <button  className='signupBtn' onClick={()=>userSignup()}  >Register</button>
</form>
                        </div> 

                </div>    
    )
}

export default Register;