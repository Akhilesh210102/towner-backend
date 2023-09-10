const mongoose = require('mongoose');


const roleSchema = new mongoose.Schema({
  id: Number,
  roleName: {
    type : String,
  //  min 2 max 15 
  },
  archive: {
    type: String,
    enum: ['PENDING', 'APPROVED', 'REJECTED', 'HOLD', 'SUSPENDED']
  },
  createdBy: Number,
  updatedBy: Number,
  },
  { timestamps: true }
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;