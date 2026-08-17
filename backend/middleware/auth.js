const jwt=require('jsonwebtoken');
exports.auth=(req,res,next)=>{try{const t=req.headers.authorization?.split(' ')[1];if(!t)throw Error();req.user=jwt.verify(t,process.env.JWT_SECRET);next()}catch(e){res.status(401).json({message:'Unauthorized'})}};
exports.roles=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'Forbidden'});