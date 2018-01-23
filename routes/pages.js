const route = require('express').Router()
const express=require('express')
// route.get('/guest', (r,s) => s.render('guest'))

// route.get('/premium', (req, res) => {
//     if (req.user) {
//         return res.render('premium')
//     }
//     res.redirect('/user/signin')
// })

route.get('/profile', (req, res) => {
    if (req.user) {
        return res.render('profile', {user: req.user})
    }
    res.redirect('/user/signin')
})

route.get('/guest/allcars',(req,res)=>res.render('gallcars'))
route.get('/guest/upcomingcars',(req,res)=>res.render('gupcomingcars'))
route.get('/guest/mclaren570s',(req,res)=>res.render('gmclaren570s'))
route.get('/guest/californiat',(req,res)=>{   
res.render('gcaliforniat')
})
route.get('/guest/mustang',(req,res)=>res.render('gmustang'))
route.get('/guest/shelby',(req,res)=>res.render('gshelby'))
route.get('/guest/montero',(req,res)=>res.render('gmontero'))
route.get('/guest/endeavour',(req,res)=>res.render('gendeavour'))
route.get('/guest/focus',(req,res)=>res.render('gfocus'))
route.get('/guest/lancer',(req,res)=>res.render('glancer'))

route.get('/premium/main', (req, res) => {
        if (req.user) {
            return res.render('pmain',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/californiat', (req, res) => {
        if (req.user) {
            return res.render('pcaliforniat',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/allcars', (req, res) => {
        if (req.user) {
            return res.render('pallcars',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/upcomingcars', (req, res) => {
        if (req.user) {
            return res.render('pupcomingcars',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/mclaren570s', (req, res) => {
        if (req.user) {
            return res.render('pmclaren570s',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/mustang', (req, res) => {
        if (req.user) {
            return res.render('pmustang',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/shelby', (req, res) => {
        if (req.user) {
            return res.render('pshelby',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/montero', (req, res) => {
        if (req.user) {
            return res.render('pmontero',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/endeavour', (req, res) => {
        if (req.user) {
            return res.render('pendeavour',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/focus', (req, res) => {
        if (req.user) {
            return res.render('pfocus',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/lancer', (req, res) => {
        if (req.user) {
            return res.render('plancer',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/socket', (req, res) => {
        if (req.user) {
            return res.render('socket',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/buy', (req, res) => {
        if (req.user) {
            return res.render('buy',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/sell', (req, res) => {
        if (req.user) {
            return res.render('sell',{user:req.user})
        }
        res.redirect('/user/signin')
    })


exports = module.exports = route