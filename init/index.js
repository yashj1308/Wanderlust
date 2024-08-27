const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const { init } = require("../models/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("Database is connected!");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async ()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=> ({...obj, owner: "66c333486e04963d429a03d0"}))
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized")
}

initDB();