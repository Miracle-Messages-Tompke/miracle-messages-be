const express = require("express")
const router = express.Router(); 

const Volunteer = require("../models/volunteer-model.js"); 

// To find the req.body of id and email to make sure that the email exists in the database 
router.get("/volunteerdata", (req, res) => {
    const email  = req.body;

    Volunteer.findBy(email)
    .then(mail => {
        if(email) {
            res.status(200).json(mail)
        } else {
            res.status(204).json("No content", mail)
        }
    })
    .catch(error => {
        console.log("Catch", error)
        res.status(500).json(error)
    })
})


// To replace volunteers old password with new one 
router.put("/updatepassword", (req, res) => {
    const password =  req.body; 

    Volunteer.updateVolunteer(password)
    .then(response => {
        if(password) {
            res.status(200).json(response)
        } else {
            res.status(204).json(response)
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router; 