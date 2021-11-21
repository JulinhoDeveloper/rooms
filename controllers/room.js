const express = require("express");
const Room = require("../models/room")


exports.getallrooms = async (req, res) => {
   
     try {
          const rooms = await Room.find()
     res.send(rooms)
     } catch (error) {
          return res.status(400).json({ message: 'alguma coisa deu errada' });
     }

};


exports.getroombyid = async(req, res) => {
     console.log(req.body);
     try {
          const room = await Room.findOne({'_id' : req.body.roomid})
          res.send(room)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
};


exports.addroom = async(req, res) => {
  const { room , 
     rentperday, maxcount ,description ,phonenumber ,type ,image1 ,image2 ,image3} = req.body

     const newroom = new Room({
          name : room,
          rentperday, 
          maxcount , description , phonenumber , type , imageurls:[image1 , image2 ,image3] , currentbookings:[]
     })
     try {
          await newroom.save()
          res.send('Adicionado com sucesso')
     } catch (error) {
          return res.status(400).json({ error });
     }
};