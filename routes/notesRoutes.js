const express = require('express');
const router = express.Router();
const fs = require('fs');
const dbPathName = './db/db.json';
const {v4:uuid} = require('uuid');


router.get('/notes', (req, res) => {
    fs.readFile(dbPathName,(error,data) => {
        if (error) {
            console.log(error);
            return;
        }
    data = JSON.parse(data);
    res.json(data)

    })
    

});

router.post('/notes', (req, res) => {
    let newNote = {
        id: uuid(),
        ...req.body
    }
    console.log(newNote);
    fs.readFile(dbPathName,(error,data) => {
        if (error) {
            console.log(error);
            return;
        }
    data = JSON.parse(data);
    data.push(newNote)
    data = JSON.stringify(data);
    fs.writeFile(dbPathName, data, 'utf-8', err => {
        if (err) {
            console.log(err)
            return
        }
        res.status(201).json({msg:'add new note'})
    } )
    

    })
    

});


module.exports = router;