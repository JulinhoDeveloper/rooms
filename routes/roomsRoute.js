const express = require("express");
const router = express.Router();
const {getallrooms,getroombyid, addroom} = 
require('../controllers/room');

//get room
router.get('/getallrooms', getallrooms);

//get room pelo id
router.get('/getroombyid', getroombyid);

//ADD room 
router.post('/addroom',addroom);
  

module.exports = router;