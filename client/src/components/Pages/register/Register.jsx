
import { Dialog } from '@mui/material'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateSignup,authenticateLogin, verifyEmail, updatePassword } from '../../../service/api'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import generateOtp from 'rv-otp-generator';
import OtpImg from '../../../Images/otp.png'
import { height } from '@mui/system';


const signupInitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''
}


const Register = () => {

        const temp = []
        const navigate = useNavigate();
        const ImgUrl = "https://img.freepik.com/free-vector/telework-concept-illustration_114360-5389.jpg?w=2000"

        // const [signup, setSignup] = useState(signupInitialValues);
        const [signup, setSignup] = useState({
                // firstname: '',
                // lastname: '',
                // username: '',
                fullname:"",
                email: '',
                password: '',
                confirmPass:''
        });

        const [login,setLogin]=useState({
                fullname:"",
                password:""
        })

        const [registerPage, setRegisterpage] = useState(true);
        const [phone, setPhone] = useState("+911234567890");
        const [forget,setForget]=useState(true);
        const [forgetEmail,setforgetEmail]=useState('');
        const [OTP,setOTP]=useState(true);
        const [newPass,setNewPass]=useState(false);

        const [getOtp, setGetOtp]=useState('');
        const [otp,setotp]=useState(0);
        const[getNewpass, setGetNewpass]=useState({
                newpassword:"",
                confirmpassword:""
        });

        // const email="";


           //==========Registeration code =========================================

        const onInputChange = (e) => {
                setSignup({ ...signup, [e.target.name]: e.target.value });
        }
        const userSignup = async (e) => {
                e.preventDefault();
                
               
        //         if(signup.firstname.length<=2){
        //                 toast("Please Enter valid first name",{
        //                         autoClose:2000
        //                 })
        //        }
        //        else if(signup.lastname.length<=2){
        //         toast("Please Enter valid last name",{
        //                 autoClose:2000
        //         })
        //        }

     
                if(signup.fullname.length<=3){
                toast("Fullname should be more than 3 characters",{
                        autoClose:2000
                })
               }
               else if(signup.password.length<=2){
                toast("Password should be more than 2 characters",{
                        autoClose:2000
                })
               }
               else if(signup.password!=signup.confirmPass){
                  console.log("pass is ",signup.password);
                  console.log("confirm pass is ",signup.confirmPass)
                toast("Passwords do not match",{
                        autoClose:2000
                })
               }
               else {

                signup.phone=phone;
                delete signup.confirmPass; 
                console.log(signup)
                let res= await authenticateSignup(signup);

                console.log("res is ", res)

                if(res){
                        console.log("registeration is successful")
                        navigate("/")
                }

                else{
                        toast("Email-id or Phone is already registered",{
                                autoClose:2000
                        })

                        console.log("registeration is unsucessfull")
                        return

                }  
               }
        }
        const handleLogin = () => {
                setRegisterpage(!registerPage);
        }


        //=============================================Login Code=============================================

       const onInputChangeLogin=(e)=>{
             setLogin({...login,[e.target.name]:e.target.value})
       }
        const userLogin = async(e) => {
                e.preventDefault();
                    if(login.fullname.length<=3){
                        toast("Fullname should be more than 3 characters",{
                                autoClose:2000
                        })
                       }
                       else{
                        console.log("login is ", login)
                        let res= await authenticateLogin(login);
                        if(res){
                                console.log("Login is successfull")
                                navigate("/")
                        }
                        else{
                                toast("Password is incorrect",{
                                        autoClose:2000
                                })
                                console.log("Login is unsucessfull")
                                return
                        } 
                       }      
        }



        //================================Forget password code===========================================

        const handleForget=()=>{
                setForget(false);
        }
        const handleForgetEmail=(e)=>{
                setforgetEmail(e.target.value)
                console.log("mail is ",forgetEmail)
        }
        
        const handleOtp=async(e)=>{
                e.preventDefault();
                        // email=forgetEmail
                let res=await verifyEmail({email:forgetEmail});

                        console.log("res is ",res)
                   if(res){
                        setOTP(false)
                        console.log("opthhh is ",getOtp)
                        console.log("email is ",forgetEmail)
                        const otp = generateOtp(4)
                        setotp(otp);
                        console.log(otp)
                        temp.push({"email" : forgetEmail , "otp" : otp})
                        console.log(temp)
                        // setforgetEmail('');
                        setGetOtp('');
                        
                        console.log("opt is ",getOtp)
                        window.Email.send({
                                Host : "smtp.elasticemail.com",
                                Username : "anshu.verma62074@gmail.com",
                                Password : "B4B14856EDDCC0A25DAF23492E8D4A7E356B",
                                To : forgetEmail,
                                From : "anshu.verma62074@gmail.com",
                                Subject : "This is the otp to reset password for JOB HUNT",
                                Body : otp
                        }).then(
                        //       message => alert(message) 
                             message=>{
                                        // alert(message)
                                if(message==="OK"){
                                        toast("OTP has been sent successfully",{
                                                autoClose:2000
                                        })
                                }
                                else{
                                        alert("Something went wrong try after some time")
                                        toast(message,{
                                                autoClose:2000
                                        })
        
                                }
                               
                             }
                        );
                   }     
                        else {
                                toast("Email is not registered",{
                                        autoClose:2000
                                })  
                        }
        }


        const handleChangeOtp=(e)=>{
                // e.preventDefault();
                setGetOtp(e.target.value);
              
        }

        const handleOtpSubmit=(e)=>{
                        e.preventDefault();
                        console.log("temp is ", temp)
                        if(otp!=getOtp){
                                toast("OTP is incorrect",{
                                        autoClose:2000
                                })  
                        }
                        else{
                                //    let flag=0;     
                                //   for(var i=0;i<temp.length;i++){
                                //         if(temp[i].email==forgetEmail && temp[i].otp==getOtp){
                                //                     flag=1;    
                                //         }
                                //   }      
                                //   if(flag){
                                //         setNewPass(true)
                                //   }
                                console.log("forget email is ", forgetEmail)

                               setNewPass(true);
                        }
        }

        //============================New password set code==========================================

        const handleNewPass=(e)=>{
                setGetNewpass({ ...getNewpass, [e.target.name]: e.target.value });
        }
       const  handleNewPassSubmit=async(e)=>{
        console.log("mouse has been clieked");
                        e.preventDefault();
                        console.log(getNewpass)
        if(getNewpass.newpassword!=getNewpass.confirmpassword){
              toast("Passwords do not match",{
                      autoClose:2000
              })
             }
        else{

                console.log("registered email is ", forgetEmail);
                        const res=await updatePassword({email:forgetEmail,password:getNewpass.newpassword}) 
                        
                        if(res){
                                        toast("Password has been updated successfully",{
                                                autoClose:2000
                                        })
                        }
                        else{
                                toast("Something went wrong try after sometime",{
                                        autoClose:2000
                                })
                        }
               
               
        }
          
       }


        return (
                <>

                <div className='Container'>
                        <div className='leftSide '>
                                <img src={ImgUrl} alt="" />
                                <div className="transparent-layer">"Choose a job you love, and you will never have to work a day in your life." - Confucius.</div>
                        </div>
                        <div className='rightSide '>

                                {
                                        registerPage ?


  //==================================================This is registeration Form ===================================================

                                                <form className='signupForm' action='' onSubmit={userSignup} style={{ padding: "20px" }} >
                                                
                                                        <h2 style={{ color: "green", textAlign: "center" }} >REGISTRATION FORM</h2>
                                                        {/* <div className='signupuserInput'>
                                                                <input type="text" onChange={(e) => onInputChange(e)} placeholder='First Name' name="firstname" />
                                                        </div>

                                                        <div className='signupuserInput'>
                                                                <input type="text" onChange={(e) => onInputChange(e)} placeholder='Last Name' name="lastname" />
                                                        </div> */}
                                                        <div className='signupuserInput'>
                                                                <input type="text" onChange={(e) => onInputChange(e)} value={signup.fullname} placeholder='Full name' name="fullname" />

                                                        </div>
                                                        <div className='signupuserInput'>
                                                                <input type="email" onChange={(e) => onInputChange(e)} value={signup.email} placeholder='Email Address' name="email" />

                                                        </div>

                                                        <div className='signupuserInput'>

                                                        <PhoneInput placeholder="Enter phone number"  value={phone} onChange={setPhone}
                            defaultCountry="" /> 


                                                                {/* <input type="text" onChange={(e) => onInputChange(e)} placeholder='Phone Number' name="phone" /> */}
                                                        </div>
                                                        <div className='signupuserInput'>
                                                                <input type="password" onChange={(e) => onInputChange(e)} value={signup.password} placeholder='Password' name="password" />
                                                        </div>
                                                        <div className='signupuserInput'>
                                                                <input type="password" onChange={(e) => onInputChange(e)}   name='confirmPass' placeholder='Confirm Password' />
                                                        </div>
                                                        <button className='signupBtn' type='submit'   >Register</button>
                                                        <div className='LoginPage' >
                                                                Already have an account?     <span className='login' onClick={handleLogin} > <u> Login </u> </span>
                                                        </div>
                                                       
                                                </form>
                                                :

                                                

                                                forget?
        //===================================Login form======================================
                                                
                                                <form className='signupForm' action='' onSubmit={userLogin} style={{ padding: "70px" }} >
                                                        <h2 style={{ color: "green", textAlign: "center" }} >LOGIN FORM</h2>
                                                        <div className='signupuserInput'>
                                                                <input type="text" onChange={(e) => onInputChangeLogin(e)} placeholder='Full name' value={login.fullname} name="fullname" />
                                                        </div>
                                                        <div className='signupuserInput'>
                                                                <input type="password" onChange={(e) => onInputChangeLogin(e)} value={login.password}  placeholder='Password' name="password" />
                                                        </div>

                                                        <button className='signupBtn' type='submit'  >Login</button>
                                                                <div className='forgetPassword' onClick={handleForget} >
                                                                        Forget Password?
                                                                </div>

                                                               
                                                        <div className='LoginPage' >
                                                                New to Job Hunt?     <span className='login' onClick={handleLogin} > <u> Register </u> </span>
                                                        </div>


                                                     
                                                       
                                                </form>
                                                :

                                                
//=================================Forget Email===================================================
                                                       
                                                <div  className='signupForm'   >  
                                                <div className='OtpForm'>
                                                       
                                                <img src={OtpImg} style={{ objectFit:"fill", width:"40vh", height:"50vh"}} alt="" />   
                                             
                                                <>                   
                                                        <div className='signupuserInput' style={{alignItems:"center", marginTop:"100px" }}>  
                                                        { OTP ?
                                                                <>
                                                        <input type="email" onChange={handleForgetEmail} placeholder='Enter Register Email' value={forgetEmail} name="forgetEmail" style={{fontSize:"15px", witdh:"auto"}} />

                                                        <button  className='btn-primary btn' style={{marginTop:"10px", backgroundColor:"green" , width:"100px" , marginLeft:"80px" }} onClick={handleOtp} >Send OTP</button>
                                                        </>
                                                        
                                                        :
                                                        <>
                                                                {
                                                                                newPass?

        // ===========================================  new password===========================================

                                                                 <>
                                                                 <div className='signupuserInput'>
                                                                <input type="password" onChange={(e) => handleNewPass(e)} placeholder='Enter New Password' name="newpassword"  />
                                                        </div>
                                                        <div className='signupuserInput'>
                                                                <input type="password" onChange={(e) => handleNewPass(e)} placeholder='Confirm Password' name="confirmpassword" />
                                                        </div>
                                                        <button  className='btn-primary btn' style={{marginTop:"10px", backgroundColor:"green" , width:"100px" , marginLeft:"50px" }} onClick={handleNewPassSubmit} >Submit</button>
                                                                
                                                                </> 
                                                        :
                                                           <>
      {/* ===========================================Opt validate section ==========================================   */}
                                                           <input type="text" style={{fontSize:"15px"}} onChange={handleChangeOtp} placeholder='Enter OTP' name="getOtp" value={getOtp
                                                                } />
                                                                <br />

                                                                <button  className='btn-primary btn' style={{marginTop:"10px", backgroundColor:"green" , width:"100px" , marginLeft:"50px" }} onClick={handleOtpSubmit} >Submit</button>
                                                           
                                                           
                                                           
                                                           </>
}
                                                        
                                                                </>                                              
                                                        }                                                               
                                                        </div>  
                                                      </>
                                                      </div> 
                                                        </div>    
                                                              
                                                }
                                

                        </div>
                       

                </div>
                <ToastContainer/>
                </>
        )
}

export default Register;