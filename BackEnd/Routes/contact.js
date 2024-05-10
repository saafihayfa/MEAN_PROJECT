const express = require('express')
const { addContact, allContacts, deleteContact, getOneContact, updateContact } = require('../Controllers/contactController')
const router = express.Router()


//juste pour tester router
// router.get('/test',(re,res)=> {
//     res.send("this is a test");
// });


// add new contact 
// method post
// req.body
router.post('/addcontact', addContact)


// get all contacts
// method get 
router.get('/allcontacts',allContacts)


// remove contact 
// method delete 
// req.params
router.delete('/deleteContact/:id',deleteContact)


// update contact 
// method put 
// req.body 
// req.params
router.put ('/updateContact/:id',updateContact)  


// get one contact 
// method get 
// req.params
router.get('/getOneContact/:id', getOneContact)


module.exports=router ;