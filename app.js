const express = require('express')
const app = express()
const port = 3000
var expressLayouts = require('express-ejs-layouts');
// gunakan ejs
app.set('view engine','ejs')
app.use(expressLayouts)
app.get('/',(req,res) => {
    const mhs = [
        {
            nama: 'asep',
            email: 'asep@gmail.com'
        },
        {
            nama: 'erik',
            email: 'erik@gmail.com'
        },
        {
            nama: 'dodi',
            email: 'dodi@gmail.com'
        },
    ]
    res.render('index',{
        layout: 'layouts/main-layout',
        nama:'aris tris', 
        title: 'Halaman Home',
        mhs
    })
})

app.get('/contact',(req,res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        layout: 'layouts/main-layout',
        title: 'Halaman About'
    })
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

