const dbOperations = require( '../services/indexServices');

module.exports.getRoleById = async(req, res) => {
    const { roleid } = req.params;
    const roleData = dbOperations.getRoleById(roleid)
    
    if (!roleData) {
        return res.status(404).json({ error: 'Role not found' });
    }

    res.status(200).json(roleData);
}


module.exports.getRoleList = async(req, res) => {
    const roleList = dbOperations.getRoles()

    if (!roleData) {
        return res.status(404).json({ error: 'Role List not found' });
    }

    res.status(200).json(roleList);
}


module.exports.updateRoleById = async(req, res) => {
    const { roleId } = req.params;
    const updatedRoleData = req.body; 

    const roleData = dbOperations.updateRoleById(roleId, updatedRoleData)

    if (!roleData) {
        return res.status(404).json({ error: 'Role not found' });
    }

    res.status(200).json({  message: 'SUCCESS' });
  
}

module.exports.deleteRoleById = async(req, res) => {
    const { roleId } = req.params;

    const roleData = dbOperations.deleteRoleById(roleId)

    if (!roleData) {
        return res.status(404).json({ status: 404, message: 'Role not found' });
    }

    res.status(200).json({ status: 200, message: 'SUCCESS' });
  
}

module.exports.createRole = async(req, res) => {
    const newRoleData = req.body;
    const newRole = new Role(newRoleData);

    await newRole.save();

    res.status(200).json({ status: 200, message: 'Role created successfully', role: newRole });
}





