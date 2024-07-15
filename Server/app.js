const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const noteroutes = require('./routes/note.js')

const app = express();
const PORT = process.env.PORT || 7000;
const Mongourl = process.env.MONGO_URL;

mongoose.connect(Mongourl).then(()=>{
    console.log("Database is connected Successfull");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>console.error(error));

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("WELCOME TO THE NOTE TAKING APP!!");
});

app.use('/api',noteroutes);
