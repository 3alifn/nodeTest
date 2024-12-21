import express from "express";
import { admin_func } from "../setting/admin-app.js";
export const admin_router = express.Router();
import jwt, { decode } from "jsonwebtoken"; 
admin_router.all('/', admin_func )
import { cryptoJs } from "../server.js";
const user= {
  name: 'Mr. Bean',
  age: 56,
  email: 'inbox@mrbean.com',
  user_id: 1001
}

admin_router.get('/session/set', (req, res)=>{
    req.session.user= {name: 'Mr. Bean', email: "inbox@mrbean.com"}
    res.end('session set now')
})

admin_router.get('/session/get', (req, res)=>{
    res.json(req.session.user)
})

admin_router.all('/jwt/set', (req, res)=>{
  const encryptUser=cryptoJs.encrypt(process.env.jwt_key, JSON.stringify(user));
  
const token= jwt.sign({data: encryptUser}, process.env.jwt_key, {expiresIn: '5min'})

res.cookie('auth', token, {httpOnly: true, sameSite: 'strict', secure: false, maxAge:  1000*60*5 /*5min */ })

const decrypt= cryptoJs.decrypt(process.env.jwt_key, encryptUser)

res.end(decrypt)

})


admin_router.all('/jwt/get', (req, res, next)=>{
  const token= req.cookies['auth']
  
      jwt.verify(token, process.env.jwt_key, (err, decode)=>{
        if(err) {
            throw err.message
           next(err.message)
        } 
       else {
        
        const decrypt= cryptoJs.decrypt(process.env.jwt_key, decode.data)
        
        res.end(decrypt)
       }
       
      })
    
    })
    
