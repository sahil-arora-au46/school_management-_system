const { teacherModel } = require("../models/teachermodel");
const data = async (req, res) => {
    try {
        const userId = req.param
        console.log("tttttt", userId)
        let teacher = await teacherModel.findOne();
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).send({ status: "error", error })
    }
};
const add = async (req, res) => {
    let teacherData = req.body
    try {
        let teacher = await teacherModel.create(teacherData)
        console.log(teacher._id)
        res.status(201).send({ id: teacher._id })

    } catch {
        res.status(500).send({ status: "error", error });
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
};