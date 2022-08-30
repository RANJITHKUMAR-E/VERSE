const UserDetails = require("./../model/UserDetails");
const Accounts = require("./../model/Accounts");
const BranchDetails = require('./../model/BranchDetails')

let detail,acc,venbranch,venacc;

const validatedetails = (req,res,next)=> {
    
    try{
        const {Password, ConfirmPassword} = req.body;
        if(Password!=ConfirmPassword) throw new Error("Password Mismatch");
        next();
    }
    catch(err)
    {
        res.status(400).json({
            status : "failed",
            message : err.message
        })
    }
}

const createuser = async(req,res,next)=> {
    
    try{
        const {Username,EmailId,Password,AccountType,Name,DateOfBirth,DrivingLicenseNumber,PhoneNumber} = req.body;
       
        acc = await Accounts.create({
            email_id:EmailId,
            username:Username,
            password:Password,
            account_type:AccountType
        })

        detail = await UserDetails.create({
            name: Name,
            email_id:EmailId,
            username:Username,
            password:Password,
            date_of_birth:DateOfBirth,
            phone_number:PhoneNumber,
            driving_license_number:DrivingLicenseNumber,
        })
        
        if(AccountType == "vendor") next()

        else
        {
            res.status(201).json({
                status : "success",
                message : "Account created successfully"
            })
        }
    }
    catch(err){
        res.status(400).json({
            status : "failed",
            message : err.message
        })
    }

}

const vendorbranch = async (req,res)=> {
    try
    {
        const {CompanyLicenseNumber,CompanyName,Location,Address,VehiclesOwned,MonthlyAmount} = req.body;
        venbranch = await BranchDetails.create({
            company_license_number: CompanyLicenseNumber,
            company_name: CompanyName,
            location: Location,
            address: Address,
            vehicles_owned: VehiclesOwned,
            monthly_amount: MonthlyAmount
        })

        await UserDetails.findOneAndUpdate({_id: detail._id},{$push: {vendor_id:venbranch._id}})

        const {AccountNumber,AccountHolderName,IfscCode,AccountHolderPhoneNumber} = req.body;
        venacc = {
            account_number:AccountNumber,
            account_holder_name:AccountHolderName,
            ifsc_code:IfscCode,
            account_holder_phone_number:AccountHolderPhoneNumber,
        }

        await UserDetails.findOneAndUpdate({_id: detail._id},{vendor_account_details:venacc})

        res.status(200).json({
            status: "success",
            message: "Account Created successfully"
        })
        
    }
    catch(err)
    {
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
}


module.exports = {createuser,validatedetails,vendorbranch};