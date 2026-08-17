const mongoose=require('mongoose');
module.exports=mongoose.model('SLAConfig',new mongoose.Schema({priority:{type:String,unique:true},resolutionHours:Number}));