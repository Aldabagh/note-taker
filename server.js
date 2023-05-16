const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'public/notes.html'));
    res.sendFile(path.join(__dirname,"public","notes.html"));
})


// app.listen always in the bottom
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});

