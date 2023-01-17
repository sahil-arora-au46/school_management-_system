const { studentModel } = require("../models/studentmodel");
const data = async (req, res) => {
    try {
        let students = await studentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send({ status: "error", error })
    }
};
const add = async (req,res) => {
    let studentData = req.body
    try {
        let student = await studentModel.create(studentData)
        res.status(201).send({ id: student._id });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
};
const remove = async () => {
    let studentID = req.body.id;
    try {
        let student = await studentModel.findByIdAndDelete(studentID)
        res.send(200).send({ status: "deleted", msg: `${student.name} of ${student.class}-${student.section}  is deleted successfully` })
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
};
const edit = async () => {
    let studentID = req.param;
    let updatedStudent = res.body;
    try {
        let student = await studentModel.findByIdAndUpdate(studentID, updatedStudent, { runValidators: true, new: true })
    } catch (error) {

    }
};
module.exports = {
    add,
    edit,
    data,
    remove
};