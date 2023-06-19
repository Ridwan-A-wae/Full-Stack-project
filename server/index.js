const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const blogRoute = require('./routes/blog')
const auth = require('./routes/auth')


// database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
}).then(() => {
    console.log('เชื่อมต่อฐานข้อมูล')
}).catch(() => {
    console.log('เชื่อมต่อฐานข้อมูล "ไม่สำเร็จ"')
})

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api',blogRoute)
app.use('/api',auth)

// server
port = process.env.PORT || 8080
app.listen(port,() => {
    console.log(`เปิดใช้งาน server port: ${port}`)
})