const r=require('express').Router(),c=require('../controllers/users'),{auth,roles}=require('../middleware/auth');r.get('/',auth,roles('admin'),c.list);module.exports=r;
