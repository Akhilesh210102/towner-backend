const { Router } = require('express');
const indexController = require('../role/controller/indexController');

const router = Router();

router.get('/role/:roleId', indexController.getRoleById);
router.get('/role', indexController.getRoleList);

router.post('/role', indexController.createRole);

router.put('/role/:roleId', indexController.updateRoleById);

router.delete('/role/:roleId', indexController.deleteRoleById);


module.exports = router;

