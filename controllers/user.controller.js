const path = require('path')
const fs = require('fs');
const UserModel = require('../model/user.model.js');
class UserController {
    static postUserDetail = async (req, res)=>{
        try {
           const user = new UserModel();
        user.name = req.body.name;
        user.emailid = req.body.emailid;
        user.contact = req.body.contact;
        user.address = req.body.address;
        await user.save()
        if(!user){
            return res.status(200).send({
                status: 404,
                message: 'No data found'   
            })
        }
        res.status(200).send({
            status: 200,
            message: 'Data Save Successfully' 
        })


    } catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to insert data',
            errors: error,
            status: 400
        })
    }
    }
   static getAllUserDetail = async (req, res)=>{
        
    try{
        const userid = await UserModel.find()
        if(!userid){
            return res.status(200).send({
                status: 404,
                message: 'No data find'   
            })
        }
        res.status(200).send({
            status: 200,
            message: 'Data find Successfully' 
        })
        } catch(error){
        console.log(error)
        return res.status(400).send({
            message:'Unable to find data',
            errors: error,
            status: 400
        })
    }
}
static updateUserDetail = async (req, res)=>{
    try{
        const _id = req.body._id;

        const User= await UserModel.findOneAndUpdate({_id:req.body._id}, {"$set": {
            name: req.body.name,
            emailid:req.body.emailid,
            contact:req.body.contact,
            address: req.body.address,
        }} )
        if(!User){
            return res.status(200).send({
            status: 404,
            message: 'No data find'
         })
    }
        res.status(200).send({
        status: 200,
        message: 'Data Update Successfully'
    })
    } 
        catch(error){
        console.log(error)
        return res.status(400).send({
        message:'Unable to update data',
        errors: error,
        status: 400
    })
    }
    }
    static deleteUserDetail = async (req, res)=>{
        try{
            const _id = req.body;
            const User= await UserModel.findByIdAndRemove(req.body._id)
            if(!User){
            return res.status(200).send({
            status: 404,
            message: 'No data find'
        })
        }
            res.status(200).send({
            status: 200,
            message: 'Data Delete Successfully'
            })
        } 
            catch(error){
            console.log(error)
            return res.status(400).send({
            message:'Unable to find data',
            errors: error,
            status: 400
        })
        }
    }
    
}
module.exports = UserController