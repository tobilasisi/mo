const express = require('express');
const verifyToken = require('../middleware/auth');
const offenderController = require('../controllers/offender.controller');

const router = express.Router();

router.get('/', offenderController.index);
router.post('/new', verifyToken, offenderController.newOffender);
router.get('/:offenderId', verifyToken, offenderController.viewOffender);
router.put('/:offenderId', verifyToken, offenderController.editOffender);
router.delete('/:offenderId', verifyToken, offenderController.deleteOffender);

module.exports = router;