// include express and define port
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const htmlRouts = require('./routes/html');
const notesRoutes = require('./routes/notesRoutes');
// middleware

app.use(express.json());
app.use(express.static('public'));
app.use('/',htmlRouts);
app.use('/api',notesRoutes);





// app.listen always in the bottom / port check
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});

