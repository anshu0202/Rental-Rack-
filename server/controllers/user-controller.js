import User from "../model/user-schema.js";


export const userSignup= async(req, res)=>{
    try{
        //     const exist= await User.findOne({username:req.body.username});
        // if(exist){
        //     return res.status(401).json({message:'Username already exists'});
        // }
        const user=req.body;
        const newUser= new User(user);
        await newUser.save();
        res.status(200).json({message:user});
    }
    catch(error){
        console.log("error while registeration ", error.message)
        res.status(500).json({message:error.message});
    }     
} 

export const userLogin= async(req, res)=>{
        try{
            const username=req.body.username;
            const password=req.body.password;
            const user=User.findOne({username:req.body.username, password:req.body.password});
            
            if(user){
               return  res.status(200).json({data:user});

            }
            else{
                   return res.status(401).json('Invalid login'); 
            }
        }
        catch(error){
                    console.log("error while login")
                    res.status(500).json('Error ', error.message);
        }



}




