const express = require('express');
const router = express.Router();

const demoController = require('../controller/demoController')


router.get('/data', demoController.getdata);
router.post('/postData', demoController.postdata)
router.post('/updateData/:name', demoController.updatedata);
router.delete('/deleteData/:name' , demoController.deletedata);

module.exports = router;