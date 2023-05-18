const express = require("express");
const router = express.Router();
const fs = require("fs");
const dbPathName = "./db/db.json";
const { v4: uuid } = require("uuid");

// Get all notes route
router.get("/", (req, res) => {
  fs.readFile(dbPathName, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    data = JSON.parse(data);
    res.json(data);
  });
});

//Create note
router.post("/", (req, res) => {
  let newNote = {
    id: uuid(),
    ...req.body,
  };
  console.log(newNote);
  fs.readFile(dbPathName, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    // push new note into notes (JSON)
    data = JSON.parse(data);
    data.push(newNote);
    // convert notes to string
    data = JSON.stringify(data);

    // rewrite file with all notes using string
    fs.writeFile(dbPathName, data, "utf-8", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(201).json({ msg: "add new note" });
    });
  });
});

// Delete note by id
router.delete("/:id", (req, res) => {
  let savedNotes = fs.readFile(dbPathName, (error, data) => {
    if (error) {
      throw error;
    }
    data = JSON.parse(data).filter((note) => note.id !== req.params.id);
    fs.writeFile(dbPathName, JSON.stringify(data), (err) => {
      if (err) throw err;
      res.send(`Note with the id ${req.params.id} deleted`);
    });
  });
});

module.exports = router;
