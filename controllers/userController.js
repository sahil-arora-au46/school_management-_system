const { userModel } = require("../models/usermodel");
const data = () => {

};
const add = async (req, res) => {
    let userData = req.body
    try {
        let user = await userModel.create(userData);
        res.json(user)
    } catch (error) {
        res.send(error)
    }
};
const remove = () => {

};
const edit = () => {

};

module.exports = {
    add,
    edit,
    data,
    remove
}