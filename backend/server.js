const mongoose = require('mongoose')
const app = require('./app.js');
const port = 8000

const mongoUrl = 'mongodb://127.0.0.1:27017/TUTORIAL'

mongoose.connect(mongoUrl)
.then(()=>{
    app.listen(port,console.log(`app is listening on port ${port}`));
})
.catch(err => console.error(err));