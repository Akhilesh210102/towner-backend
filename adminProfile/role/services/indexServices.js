
const Role = require('../models/roleModel');

async function getRoles() {
  try {
    const roles = await Role.find();
    return roles;
  } catch (error) {
    throw error;
  }
}

async function getRoleById(roleId) {
  try {
    const roleData = await Role.findOne({ id: roleId });
    return roleData;
  } catch (error) {
    throw error;
  }
}

async function createRole(newRoleData) {
  try {
    const newRole = new Role(newRoleData);
    await newRole.save();
    return newRole;
  } catch (error) {
    throw error;
  }
}

async function updateRoleById(roleId, updatedRoleData) {
  try {
    const roleData = await Role.findOne({ id: roleId });

    if (!roleData) {
      return null; // Role not found
    }

    roleData.roleName = updatedRoleData.roleName;
    roleData.archive = updatedRoleData.archive;
    roleData.updatedBy = updatedRoleData.updatedBy;
    await roleData.save();
    return roleData;
  } catch (error) {
    throw error;
  }
}

async function deleteRoleById(roleId) {
  try {
    const roleData = await Role.findOne({ id: roleId });

    if (!roleData) {
      return null; // Role not found
    }
    roleData.archive = 'HOLD';
    await roleData.save();
    return roleData;
  } catch (error) {
    throw error;
  }
}

module.exports =  {
  createRole,
  getRoleById,
  getRoles,
  updateRoleById,
  deleteRoleById,
};
