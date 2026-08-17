const mongoose=require('mongoose');
module.exports=mongoose.model('Ticket',new mongoose.Schema({
 ticketNumber:{type:String,unique:true},subject:String,description:String,
 customer:{type:mongoose.Schema.Types.ObjectId,ref:'User'},assignedAgent:{type:mongoose.Schema.Types.ObjectId,ref:'User',default:null},
 category:{type:String,default:'General'},priority:{type:String,default:'Medium'},status:{type:String,default:'Open'},
 aiConfidence:Number,slaDeadline:Date,slaStatus:{type:String,default:'On Track'},firstResponseAt:Date,resolvedAt:Date,
 responseTimeMinutes:Number,resolutionTimeMinutes:Number
},{timestamps:true}));