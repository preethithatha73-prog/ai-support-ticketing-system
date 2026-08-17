const hours={Critical:2,High:4,Medium:8,Low:24};
exports.deadline=(priority,from=new Date())=>new Date(from.getTime()+(hours[priority]||8)*3600000);
exports.status=t=>t.slaDeadline&&new Date()>new Date(t.slaDeadline)&&!['Resolved','Closed'].includes(t.status)?'Breached':'On Track';