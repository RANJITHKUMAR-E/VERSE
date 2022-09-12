const User = require("./../model/Accounts")
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

const login = (req,res,next)=> {
    const {username, password} = req.body;
    try{
        User.findOne({$and:[{$or:[{"username":username},{"email_id":username}]},{'password':password}]}, (err,user) => {
            if(err) {
                throw err
            }
            if(user){
                res.json({
                    message: "Login Successfull"
                })
            }
            else{
                res.json({
                    message: 'No user Found'
                })
            }
        })
    }
    catch (err){
        console.log(err)
    }
}
module.exports = {login};