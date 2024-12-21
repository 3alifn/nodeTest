import nodemailer from "nodemailer";
nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'demo123xyz@gmail.com',
        pass: 'demo123xyz'
    },

}).sendMail({
    from: 'demo123xyz@gmail.com',
    to: "nomail@mail.com",
    subject: 'Test Nodemailer',
    text: 'Hello Nodemailer..........'
}, (err, sent)=>{
    if(err) console.log(err);
    else console.log('mail has been sent....');
    
    
} )