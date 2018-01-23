

const express = require('express')
const session = require('express-session')
const app = express()
const passport = require('./passport')
const User = require('./db/models').User
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'some very secret thing',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')

app.use('/user', require('./routes/user'))
app.use('/pages', require('./routes/pages'))
app.get('/', (r,s) => s.render('index'))

app.use('/',express.static(__dirname+'/views'))
app.use('/pages',express.static(__dirname+'/views'))
app.use('/pages/premium',express.static(__dirname+'/views'))
app.use('/pages/guest',express.static(__dirname+'/views'))
let c=[]
//Socket
const http = require('http')
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)
let socketIdName = {}
let arr=[]
app.get('/msg',(req,res)=>{
    res.send(arr)
})
app.get('/cars',(req,res)=>{
    res.send(c)
})
app.get('/removefromc',(req,res)=>{
    c[parseInt(req.query.id)].username=''
    
    res.send(c)
})
io.on('connection', function (socket) {
    console.log('Connected to socket id- '+socket.id)
    socket.on('chat',(obj)=>{
        arr.push(obj)
        console.log('Chat received')
        io.emit('info',{
            name:obj.name,
            message:obj.message,
            timestamp:new Date()
        },arr)
    })
    socket.on('pics',(obj)=>{
        arr.push(obj)
        console.log('Chat received')
        io.emit('info',{
            name:obj.name,
            img:obj.img,
            timestamp:new Date()
        },arr)
    })



    socket.on('sell',(obj)=>{
        c.push(obj)
        io.emit('sell',{
            username:obj.username,
            no:obj.no,
            cname:obj.cname,
            cmod:obj.cmod,
            cnum:obj.cnum,
            km:obj.km,
            cost:obj.cost,
            timestamp:obj.timestamp,
            id:c.length-1
        })
    })
})
//Socket




server.listen(4000, () => console.log("server on port 4000"))