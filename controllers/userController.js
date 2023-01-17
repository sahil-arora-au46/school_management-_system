const { userModel } = require("../models/usermodel");
const data = () => {

};
const add = async (req, res) => {
    let userData = req.body
    try {
        let user = await userModel.create(userData);
        res.send({status:'success', user:user})
     
    } catch (error) {
        res.send(error)
    }
  
};
const remove = () => {

};
const edit = async (req,res) => {
   let id =req.body.userId
   let roleId = req.body.roleId
   console.log(typeof roleId,roleId,"        ",id)
   try{
    await userModel.findByIdAndUpdate(id,{userId:String(roleId)})
    res.status(204).send('ho gya kaam')
   }catch(error){
    res.status(500).send(error)
   }
};

module.exports = {
    add,
    edit,
    data,
    remove
}