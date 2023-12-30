const  express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')

const app = express()
const port = 3000
const cors = require('cors')
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://2020bec075:2020bec075@cluster0.xbei0t8.mongodb.net/").then(()=>{
    console.log("conneted to the mongodb")
}).catch((err)=>{
    console.log("error connecting to mongodb", err)
})


app.get('/', (req, res) => res.send('Hello World!'))




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})