const { userModel } = require("../models/usermodel");
const data = async (req, res) => {
    try {
        let userData = userModel.find()
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
};
const add = async (req, res) => {
    let userData = req.body
    try {
        let user = await userModel.create(userData);
        res.send({ status: 'success', user: user })

    } catch (error) {
        res.status(500).sned({ error })
    }

};
const remove = async (req, res) => {

};
const edit = async (req, res) => {
    let id = req.body.userId
    let roleId = req.body.rollId
    console.log(req.body, "        ", id)
    try {
        await userModel.findByIdAndUpdate(id, { userId: roleId })
        res.status(204).send({ status: "updated" })
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = {
    add,
    edit,
    data,
    remove
}