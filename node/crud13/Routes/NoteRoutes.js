const express = require("express");

const {NotesModule} = require("../module/Note");

const noteRoutes = express.Router();

noteRoutes.get("/", async (req,res) => {
    const payload = req.body;
    const note = await NotesModule.find();
    res.status(201).send(note);
})

noteRoutes.post("/create", async(req,res) => {
    const payload = req.body;
    console.log(payload,"create method of notes");

    try{
        const newNotes = new NotesModule(payload);
        await newNotes.save();
        res.send({msg: "notes was created..."})
    }catch(err){
        console.log(err);
        res.send({msg: "something went wrong"})
        
    }
    
})

noteRoutes.patch("/update/:noteId", async(req,res) => {
    const payload = req.body;
    const noteId = req.params.noteId;

    const userId  = req.body.userId;
    const note = await NotesModule.findOne({_id: noteId});
    console.log(userId,note, payload);

    if(userId !==note.userId) {
        res.send(`you are not uatghorized`)
    } else{
        try{
            let newUpdate  = await NotesModule.findByIdUpadte(
                {
                    _id: noteId
                },
                payload
            )
            res.send({msg: `your task  has been update succefully ${newUpdate} with id ${noteId}`})
        }catch (err){
            res.send({msg: err})
        }
    }
    
})

noteRoutes.delete("/delete/:noteId", async(req,res) => {
    const noteId = req.params.noteId;
     const userId = req.body.userId;
     const note = await NotesModule.findOne({_id:noteId});

     console.log(userId, "this is userId");
     console.log(note, "this is note");

       if (userId !== note.userId) {
      res.send(`you're not authorized person!!`);
     } else {
         try {
      let newUpdate = await NotesModule.findByIdAndDelete({
        _id: noteId,
      });
  
      res.send({
        msg: `your Task has been deleted succesfully and id ${noteId}`,
      });
    } catch (err) {
      res.send({ msg: err });
    }
     }
})

module.exports = {noteRoutes}