const Ticket = require('../models/Ticket');
const User = require('../models/User');
const Feedback = require('../models/Feedback');

exports.dashboard = async (req, res, next) => {
  try {
    const [
      total,
      open,
      resolved,
      critical,
      breached,
      agents,
      fb
    ] = await Promise.all([
      Ticket.countDocuments(),
      Ticket.countDocuments({ status: 'Open' }),
      Ticket.countDocuments({ status: 'Resolved' }),
      Ticket.countDocuments({ priority: 'Critical' }),
      Ticket.countDocuments({ slaStatus: 'Breached' }),
      User.countDocuments({ role: 'agent' }),
      Feedback.find()
    ]);

    const avg = fb.length
      ? fb.reduce((a, b) => a + b.rating, 0) / fb.length
      : 0;

    const byCategory = await Ticket.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    const byPriority = await Ticket.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      total,
      open,
      resolved,
      critical,
      breached,
      agents,
      csat: Number(avg.toFixed(2)),
      byCategory,
      byPriority
    });
  } catch (e) {
    next(e);
  }
};