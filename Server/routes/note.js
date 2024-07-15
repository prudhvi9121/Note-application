const express = require('express');
const Note = require('../models/Note.js');
const router = express.Router();

router.get('/notes',async(req,res)=>{
    try{
        const notes = await Note.find();
        res.json(notes);
    }catch(err){
        res.status(500).json({message : err.message});
    }
});

router.get('/notes/:id',async(req,res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({ message : 'Note not found'});
        res.json(note);
    } catch(err){
        res.status(500).json({message : err.message});
    }
})

router.post('/notes', async (req, res) => {
    const note = new Note({
      title: req.body.title,
      content: req.body.content
    });
    try {
      const newNote = await note.save();
      res.status(201).json(newNote);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  router.put('/notes/:id', async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) return res.status(404).json({ message: 'Note not found' });
  
      note.title = req.body.title;
      note.content = req.body.content;
      await note.save();
  
      res.json(note);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  


  router.delete('/notes/:id', async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) return res.status(404).json({ message: 'Note not found' });
  
      await note.remove();
      res.json({ message: 'Note deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;