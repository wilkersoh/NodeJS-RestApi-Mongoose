const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// mongoose connected
mongoose.connect('mongodb://localhost/yee', { useNewUrlParser: true }, (err) => {
    if(!err){console.log('Mongoose connected')}
    else{console.log('Error in DB connection')}
});

app.use(express.static('public'));
app.use(bodyParser.json());

// routes
app.use('/api', require('./routes/index'))

// errror handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listening PORT ${PORT}`));