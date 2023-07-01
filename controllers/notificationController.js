const notifiModel = require('../models/notificationmodel')
const data = async(req,res)=>{
  let notification = await notifiModel.find()
  res.status(200).send(notification) 
};
const add =async (req,res)=>{
    let notifiData = req.body
    console.log(req.body)
    try {
        let notifi = await notifiModel.create(notifiData)
        res.status(201);
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
};
const edit =async ()=>{

};
const remove =async ()=>{

};

module.exports = {
    data,
    add,
    edit,
    remove
}
