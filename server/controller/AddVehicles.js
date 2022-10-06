const Vehicles = require("./../model/Vehicles");
const BranchDetails = require("./../model/BranchDetails");
const multer = require('multer');
const { ProfilingLevel } = require("mongodb");

const addvehicles = async (req,res,next) => {

    try {
        const {VendorId, VehicleCatagory, VehicleType, VehicleBrand, VehicleModel, Mileage, Colour, Price, FuelType, OfferAvailability, OfferDetails, OfferDuration, Location, VehicleNumber, KilometersTravelled, YearOfPurchase, BikeInsuranceNumber, LastFcDate} = req.body;
        
        //pre used History
        //Availability Status
    
        //Vehicles Images

        /*
        const VehImage = multer.diskStorage({
            destination : "vehicle images",
            filename : (req,file,cb) => {
                cb(null, file.originalname);
            },
        });

        const upload = multer({
            storage : VehImage,
        }).single('sampleImg')

        */

        veh = await Vehicles.create({
            vehicle_category : VehicleCatagory,
            vehicle_type : VehicleType,
            brand_and_model: {
            vehicle_brands : VehicleBrand,
            vehicle_model : VehicleModel,
            },
            mileage : Mileage,
            Color : Colour,
            price : Price,
            fuel_type : FuelType,
            vehicle_image : {
                data : req.file.filename,
                contenType : image/png,
            },
            vehicle_number : VehicleNumber,
            kilometers_travelled : KilometersTravelled,
            year_of_purchase : YearOfPurchase,
            bike_insurance_number : BikeInsuranceNumber,
            last_fc_date : LastFcDate,
        });

        //  {$push: {vendor_id:venbranch._id}}  await UserDetails.findOneAndUpdate({_id: detail._id},{vendor_account_details:venacc},{runValidators: true})
        await BranchDetails.findOneAndUpdate({_id : VendorId},{$push :{vehicles_owned: veh._id}});
        res.status(200).json({
            status: "success",
            message: "Vehicle Added Successfully"
        })
    }
    catch(err){
        res.status(200).json({
            status: "failed",
            message: err.message
        })
    }

}


module.exports = {addvehicles};