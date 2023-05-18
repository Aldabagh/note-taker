// include express and define port
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const htmlRouts = require('./routes/html');
const notesRoutes = require('./routes/notesRoutes');

// middleware for parsing json
app.use(express.json());
app.use(express.static('public'));

// link routes to path
app.use('/',htmlRouts);
app.use('/api/notes',notesRoutes);





// app.listen always in the bottom / port check
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});

