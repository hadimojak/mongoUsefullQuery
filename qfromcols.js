
const MongoClient = require("mongodb").MongoClient; // require mongo pakkage
const url = "mongodb://127.0.0.1:27017";    // connect to your local use this url that build from mongodb shel

const dbName = "09-15"; //to spedify the data base
let db ;
MongoClient.connect(url,{useUnifiedTopology : true}, (err ,client) =>{
    if (err) return console.log(err)

    db = client.db(dbName)
    console.log("connected Mongodb: "+ url)
    console.log("database: " + dbName)
    
});


db.getCollection('20200309').aggregate([{
    $lookup: {
        from: '20200310',
        localField: "msisdn",
        foriegnFeild: "msisdn"
    }
}])