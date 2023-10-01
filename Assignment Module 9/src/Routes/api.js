const express = require('express');
const router = express.Router();

const userController = require("../Controllers/userController");
const adminController = require("../Controllers/adminController");
const subAdminController = require("../Controllers/subAdminController");
const postController = require("../Controllers/postController");

router.get('/userControllerCrt', userController.create);
router.get('/userControllerRd', userController.read);
router.get('/userControllerDlt', userController.delete);
router.get('/userControllerUpd', userController.update);

router.get('/adminControllerCrt', adminController.create);
router.get('/adminControllerRd', adminController.read);
router.get('/adminControllerDlt', adminController.delete);
router.get('/adminControllerUpd', adminController.update);

router.get('/subAdminControllerCrt', subAdminController.create);
router.get('/subAdminControllerRd', subAdminController.read);
router.get('/subAdminControllerDlt', subAdminController.delete);
router.get('/subAdminControllerUpd', subAdminController.update);

router.get('/postControllerCrt', postController.create);
router.get('/postControllerRd', postController.read);
router.get('/postControllerDlt', postController.delete);
router.get('/postControllerUpd', postController.update);

module.exports = router;