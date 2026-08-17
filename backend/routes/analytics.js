const r=require('express').Router(),c=require('../controllers/analytics'),{auth,roles}=require('../middleware/auth');r.get('/dashboard',auth,roles('admin'),c.dashboard);module.exports=r;
