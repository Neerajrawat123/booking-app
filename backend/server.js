require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app.js');


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,console.log(`app is listening on port ${process.env.PORT}`));
})
.catch(err => console.error(err));