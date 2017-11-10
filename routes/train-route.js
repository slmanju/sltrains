const express = require("express");
const router = express.Router();
const TrainController = require("../controllers/train-controller");

router.get('/', TrainController.search_get);

router.post('/', TrainController.search_post);

module.exports = router;
