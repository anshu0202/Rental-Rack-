import User from "../model/user-schema.js";


export const userSignup= async(req, res)=>{
    try{

        console.log("data from frontyend is ", req.body);        
        const exist= await User.findOne({email:req.body.email});
        if(exist){
            return res.status(401).json({message:'Email already exists'});
        }
        const user=req.body;
        console.log("user is ",user);
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
            console.log("data from front is ",req.body);
            const email=req.body.fullname;
            const password=req.body.password;
            const user= await User.findOne({fullname:req.body.fullname, password:req.body.password});

            console.log("user is ",user);
            if(user){
               return  res.status(200).json({data:user});

            }
            else{
                   return res.status(401).json('Invalid login'); 
            }
        }
        catch(error){
                    console.log("error while login ",error.message )
                    res.status(500).json('Error ', error.message);
        }
}

export const verifyEmail= async(req, res)=>{
    console.log("email is ", req.body);

    try{

        const email=await User.findOne({email:req.body.email});
        console.log("email is ", email);
        if(email){
            return  res.status(200).json({data:email});
        }
        else{
            return  res.status(401).json('Invalid email')
        }
    }

    catch(error){
        console.log("error while email verification ",error.message )
        res.status(500).json('Error ', error.message);

    }
}



export const updatePassword=async(req, res)=>{
        console.log("req is ", req.body);
        try{

            const res=await User.findOne({email:req.body.email});
            console.log("Ress update is is ", res);

            res.password=req.body.password
              await res.save();

            // let result= await User.updateOne(
            //     {email:req.body.email},
            //     {
            //         $set:req.body.password
            //     }
            //         )
                console.log("result is ",result)
        // const res=await User.findOne({email:req.body.email});        
            // res.send(result)



            if(res){
                return res.status(200).json({data:res});
            }
                else{
                    return res.status(401).json('something Invalid')
                }
        }
        catch(error){
            res.status(500).json("Invaild operation");
        }

} 



