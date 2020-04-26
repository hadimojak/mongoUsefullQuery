db.getCollection('irancell_sdp_sub_history_4').aggregate([{ "$group": { _id: "$from", "ev": { "$last": "$$ROOT" }, count: { $sum: 1 } } }, { $sort: { "count": -1 } }])
//group data by phone numbers and count by phone numbers and show the last event type

db.getCollection('irancell_sdp_charge_2020418').find({"r" : 0,"t" :{$gt :"07:00:01"},'e':1})
//to know what users charge as they join the sevise
