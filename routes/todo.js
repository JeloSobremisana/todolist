const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/Todo');

router.get('/get', TodoController.getPaginatedData);

router.get('/get/:id', TodoController.getDataById);

router.post('/create', TodoController.create);

router.put('/update', TodoController.updateAction);

router.put('/update/status', TodoController.updateStatus);

router.delete('/delete/:id', TodoController.delete);

module.exports = router;