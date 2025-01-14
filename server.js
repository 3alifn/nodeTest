import http from 'http';
import fs from 'fs';
import dotenvInit from 'dotenv';
const dotenv= dotenvInit.config()
import crypto from "crypto"
import sjcl from 'sjcl';
export const cryptoJs= sjcl;
import express from "express";
import mysql from "mysql2";
import session from 'express-session';
import MySQLStore from 'express-mysql-session';
import path from 'path';
import { admin_router } from './route/admin-router.js';
const mysqSlqSession= MySQLStore(session)
const app= express();
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./public'))

export const sqlmap= mysql.createPool({
    host: "localhost",
    user: 'root',
    password: "toor",
    database: 'demodb',
    queueLimit: 0,
    connectionLimit: 10
})

const sessionStore= new mysqSlqSession( {}, sqlmap)

app.use(session({
    name: 'demo',
    saveUninitialized: false,
    resave: false,
    secret: 'pipra',
    store: sessionStore,
    cookie:{
        maxAge: 10000, //milisecond
        httpOnly: true,
        secure: false,
        path: '/',
        }
}))




app.use('/admin', admin_router)

app.get('/', (req, res)=>{
res.sendFile(path.join(path.resolve(), 'index.html'));
})

app.get('/test', (req, res)=>{
    async function output(){
   
        function input(param){
            return new Promise((resolve, reject)=>{
                resolve(param)
            })
        }
    
        const log= await input('Hello World')
          res.end(log)
        
    }
    
    output()
})

app.use((err, req, res, next)=>{
   console.log(err);
   next(err)
}) // error handling func


app.use((req, res, next)=>{
    res.send('404: Not found page')
})

const PORT= process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('server is running port '+PORT);
    
})



// http.createServer((req, res)=>{
//     // res.write('<center><h1>Hello World</h1></center>');
//     fs.readFile('./index.html', 'utf-8', (err, html)=>{
//         res.end(html)
//     })
// }).listen(3001, ()=>{
//     console.log('server ruuning on http://localhost:3001');
    
// }) // ruuning on port 3001
