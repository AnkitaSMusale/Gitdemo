const express=require('express');
const restaurentController = require('../controller/restaurent')

const router = express.Router()

router.get('/admin',restaurentController.admin)
router.post('/admin/addrestaurent',restaurentController.addrestaurents)
router.get('/home',restaurentController.restaurentlist)
router.get('/restaurent/:id',restaurentController.restaurentDetails) //to get the details of a restaurent
router.post('/restaurent-reviews/:id',restaurentController.restaurentReview) //to add reviews

module.exports = router;

