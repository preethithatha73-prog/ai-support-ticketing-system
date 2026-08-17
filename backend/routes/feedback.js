const r=require('express').Router(),c=require('../controllers/feedback'),{auth,roles}=require('../middleware/auth');r.post('/:id',auth,roles('customer'),c.create);module.exports=r;
