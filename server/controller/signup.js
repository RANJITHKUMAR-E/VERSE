const { remove } = require("./../model/UserDetails");
const UserDetails = require("./../model/UserDetails")

var Username,EmailId,Password,AccountType,ConfirmPassword,Name,DateOfBirth,DrivingLicenseNumber,PhoneNumber;

const createuser = async(req,res,next)=> {
    //res.send("hai");
    try{
        const {Username,EmailId,Password,AccountType, ConfirmPassword,Name,DateOfBirth,DrivingLicenseNumber,PhoneNumber } = req.body;
        
        await UserDetails.create({
            name: Name,
            email_id:EmailId,
            username:Username,
            password:Password,
            date_of_birth:DateOfBirth,
            phone_number:PhoneNumber,
            driving_license_number:DrivingLicenseNumber,
            account_type:AccountType,   
        })
        res.status(201).json({
            status : "success",
            message : "Account created successfully"
        })
    }
    catch(err){
        res.status(400).json({
            status : "failed",
            message : err.message
        })
    }

}

const validatedetails = (req,res,next)=> {
    
    try{
        
        next();
    }
    catch(err)
    {
        if(err == "Ivalid Email")
        console.error(err);
        res.send(err)
    }
}

module.exports = {createuser,validatedetails};
