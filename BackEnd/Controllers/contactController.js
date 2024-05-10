const Contact = require('../Models/Contact')


exports.addContact = async(req,res)=>{
    const  {name,email,age} = req.body ;

    try {
        // check contact exists
        const found= await Contact.findOne({email})
        if (found){
            return res.status(400).send("contact already exists !!") ;
        }
        const contact = new Contact ({
            name,email,age
        })
        await contact.save();
        res.status(201).send({msg:"contact created", contact})

    }catch(error){
                 res.status(500).send("server error")
    }
}

exports.allContacts = async(req,res)=>{
    try {
    const contacts = await Contact.find()
    res.status(200).send({msg:"all contacts",contacts}) }
    catch (error) {
        res.status(500).send("server error")
    }
}

exports.deleteContact =  async (req,res)=>{
    const {id}=req.params
    try {
       await Contact.findByIdAndDelete(id)
       res.status(200).send("contact deleted...")
    }catch (error){
       res.status(500).send("server error")
    }
}

exports.updateContact = async (req,res)=>{
    const {id} = req.params ;
    try {
        const updateContact = await Contact.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.status(200).send({msg:"contact updated",updateContact })
    } catch (error){
        res.status(500).send("server error");
    }
}

exports.getOneContact = async (req,res)=>{
    const {id}=req.params
    try {
       const onecontact = await Contact.findById(id)
       res.status(200).send(onecontact)
    }catch (error){
       res.status(500).send("server error")
    }
}