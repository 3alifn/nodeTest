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
import redis from "redis";
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

// http.createServer((req, res)=>{
//     // res.write('<center><h1>Hello World</h1></center>');
//     fs.readFile('./index.html', 'utf-8', (err, html)=>{
//         res.end(html)
//     })
// }).listen(3000, ()=>{
//     console.log('server ruuning on http://localhost:3000');
    
// }) // ruuning on port 3000

app.use('*', (req, res, next)=>{
    // console.log('middleware router checked...');
    
    next()
}) // next middleware func


app.use('/admin', admin_router)

app.get('/', (req, res)=>{
res.sendFile(path.join(path.resolve(), 'index.html'));
})


app.use((err, req, res, next)=>{
   console.log(err);
   next(err)
}) // error handling func


app.use((req, res, next)=>{
    res.send('404: Not found page')
})

app.listen(30, ()=>{
    console.log('server ruuning on http://localhost:30');
    
})
