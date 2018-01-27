const route = require('express').Router()
const express=require('express')
const Car = require('../db/models').Car
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
route.get('/guest/mclaren570s',(req,res)=>{  
    Car.findOne({
        where:{
            name:'570S'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/californiat',(req,res)=>{  
    Car.findOne({
        where:{
            name:'California T'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/mustang',(req,res)=>{  
    Car.findOne({
        where:{
            name:'California T'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/shelby',(req,res)=>{  
    Car.findOne({
        where:{
            name:'California T'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/montero',(req,res)=>{  
    Car.findOne({
        where:{
            name:'California T'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/endeavour',(req,res)=>{  
    Car.findOne({
        where:{
            name:'Endeavour'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/focus',(req,res)=>{  
    Car.findOne({
        where:{
            name:'California T'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})
route.get('/guest/lancer',(req,res)=>{  
    Car.findOne({
        where:{
            name:'California T'
        }
    }).then((c)=>{
        res.render('gcaliforniat',{car:c})
    }) 
})

route.get('/premium/main', (req, res) => {
        if (req.user) {
            return res.render('pmain',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.post('/addcar',(req,res)=>{
        Car.create({
            manufacturer:req.body.manufacturer,
            name:req.body.name,
            mainimg:req.body.mainimg,
            ldate:req.body.ldate,
            e1:req.body.e1,
            e2:req.body.e2,
            description1:req.body.description1,
            description2:req.body.description2,
            description3:req.body.description3,
            description4:req.body.description4,
            manimg:req.body.manimg,
            topspeed:parseInt(req.body.topspeed),
            zerotohund:parseFloat(req.body.zerotohund),
            power:parseFloat(req.body.power),
            powtowt:parseFloat(req.body.powtowt),
            displacement:parseFloat(req.body.displacement),
            weight:parseFloat(req.body.weight),
            price:parseInt(req.body.price),
            scapacity:parseInt(req.body.scapacity),
            colorname1:req.body.colorname1,
            colorname2:req.body.colorname2,
            colorname3:req.body.colorname3,
            colorname4:req.body.colorname4,
            color1:req.body.color1,
            color2:req.body.color2,
            color3:req.body.color3,
            color4:req.body.color4,
            colorimg1:req.body.colorimg1,
            colorimg2:req.body.colorimg2,
            colorimg3:req.body.colorimg3,
            colorimg4:req.body.colorimg4,
            interior1:req.body.interior1,
            interior2:req.body.interior2,
            interior3:req.body.interior3,
            interior4:req.body.interior4,
            interior5:req.body.interior5,
            interior6:req.body.interior6,
            exteriors1:req.body.exteriors1,
            exteriors2:req.body.exteriors2,
            exteriors3:req.body.exteriors3,
            exteriorb1:req.body.exteriorb1,
            exteriorb2:req.body.exteriorb2,
            exteriorb3:req.body.exteriorb3,
            exteriorf1:req.body.exteriorf1,
            exteriorf2:req.body.exteriorf2,
            exteriorf3:req.body.exteriorf3,
            odh1:req.body.odh1,
            odd11:req.body.odd11,
            odd12:req.body.odd12,
            odd13:req.body.odd13,
            odd14:req.body.odd14,
            odh2:req.body.odh2,
            odd21:req.body.odd21,
            odd22:req.body.odd22,
            odd23:req.body.odd23,
            odd24:req.body.odd24,
            odh3:req.body.odh3,
            odd31:req.body.odd31,
            odd32:req.body.odd32,
            odd33:req.body.odd33,
            odd34:req.body.odd34,
            odh4:req.body.odh4,
            odd41:req.body.odd41,
            odd42:req.body.odd42,
            odd43:req.body.odd43,
            odd44:req.body.odd44
        }).then((car)=>{
            res.redirect('/pages/premium/main')
        })
    })
    route.get('/admin', (req, res) => {
        if (req.user) {
            return res.render('padmin',{user:req.user})
        }
        res.redirect('/user/signin')
    })
    route.get('/premium/californiat', (req, res) => {
        Car.findOne({
            where:{
                name:'California T'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
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
        Car.findOne({
            where:{
                name:'570S'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
    })
    route.get('/premium/mustang', (req, res) => {
        Car.findOne({
            where:{
                name:'California T'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
    })
    route.get('/premium/shelby',  (req, res) => {
        Car.findOne({
            where:{
                name:'California T'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
    })
    route.get('/premium/montero',  (req, res) => {
        Car.findOne({
            where:{
                name:'California T'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
    })
    route.get('/premium/endeavour',  (req, res) => {
        Car.findOne({
            where:{
                name:'Endeavour'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
    })
    route.get('/premium/focus', (req, res) => {
        Car.findOne({
            where:{
                name:'California T'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
    })
    route.get('/premium/lancer',  (req, res) => {
        Car.findOne({
            where:{
                name:'California T'
            }
        }).then((c)=>{
            if (req.user) {
                return res.render('pcaliforniat',{user:req.user,car:c})
            }
            res.redirect('/user/signin')
        })
        
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