const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    // res.send('Hello world')
    res.sendFile('./index.html',{root: __dirname})
})

app.get('/contact',(req,res) => {
    // res.send('Hello world contact')
    res.sendFile('./contact.html',{root:__dirname})
})

app.get('/about',(req,res) => {
    // res.send('Hello world contact')
    // res.json({nama:'aris',alamat:'babantar'})
    res.sendFile('./about.html',{root:__dirname})
})

app.get('/product/:id', (req,res) => {
    res.send('Product ID ' + req.params.id)
})

app.use('/',(req,res) => {
    res.status(404)
    res.send('<h1>NOT FOUND</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// const http = require('http')
// const port = 3000
// const fs = require('fs')

// http
// .createServer((req,res) => {
//     const url = req.url
//     console.log(url);
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     if (url === '/about') {
//         res.write('<h1>Ini About</h1>')
//         res.end()
//     }else if (url === '/contact') {
//         res.write('<h1>Ini Contact</h1>')
//         res.end()
//     }else{
//         fs.readFile('./index.html',(e,data) => {
//             if (e) {
//                 res.writeHead(404)
//                 res.write('Error: File not found')
//             }else {
//                 res.write(data)
//             }
//             res.end()
//         }) 
//     }
// })
// .listen(port,() => {
//     console.log(`Server is listening on port ${port}...`);
// })
