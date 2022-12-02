import Contact from '../models/Contact.js'
export const renderContact= async (req,res)=>{
    const {name, message}= req.body;
    const newContact=new Contact({name,message});
    await newContact.save()
    return res.redirect('/all-contacts')
    
}