const express = require("express");
const nodemailer = require("nodemailer");


const User = require("../models/user.model");
const router = express.Router();
// met + route => get /users/${variable} and the name of variable is id
router.get("", async (req, res) => {
  try {
    const genderof = {gender:"Male"}
    const page = req.query.page || 1;
    const size = req.query.size || 15;
    const user = await User.find({genderof}).skip((page - 1) * size).limit(size).lean().exec();
    
    const totalpages=Math.ceil(await User.find({genderof}).countDocuments()/size);
    return res.send({page,totalpages,user})
  
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    
      // // create reusable transporter object using the default SMTP transport
      // let transporter = nodemailer.createTransport({
      //   host: "smtp.ethereal.email",
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: testAccount.user, // generated ethereal user
      //     pass: testAccount.pass, // generated ethereal password
      //   },
      // });
    
      // // send mail with defined transport object
      //  await transporter.sendMail({
      //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
      //   to: "bar@example.com, baz@example.com", // list of receivers
      //   subject: "Hello ✔", // Subject line
      //   text: "Hello world?", // plain text body
      //   html: "<b>Hello world?</b>", // html body
      // });
    
    
     

     
     
        // let transporter = nodemailer.createTransport({
        //   host: "smtp.ethereal.email",
        //   port: 587,
        //   secure: false, // true for 465, false for other ports
        //   auth: {
        //     user: "ea23749e0b0d16", // generated ethereal user
        //     pass: "70eebbe7039777", // generated ethereal password
        //   },
        // });
    
        // await transporter.sendMail({
        //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
        //   to: "bar@example.com, baz@example.com", // list of receivers
        //   subject: "Hello ✔", // Subject line
        //   text: "Hello world?", // plain text body
        //   html: "<b>Hello world?</b>", // html body
        // });
      
      
      



    if (user) {
      return res.send(user);
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});



module.exports = router;
