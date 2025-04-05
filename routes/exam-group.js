const express = require("express");
const router = express.Router();

const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    },
    {
        id: 3,
        name: "John Smith",
    }
]

const exams = [
    {
        id: 1,
        name: "Exam 1",
    },
    
]

router.post("/exams", (req, res) => {
    const {id, name} = req.body;
    const newUser = {id: parseInt(id), name};
    users.push(newUser);
    res.send({message: "User created successfully", user: newUser});
});


router.get("/exam-group", (req, res) => {
  res.send({message: "GROUP A API"});
});


router.get("/exams", (req, res) => {
    res.send({users: users});
});


module.exports = router;
