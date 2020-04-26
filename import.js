mongoimport --db=ftp_20200309 --collection=316_sdp1_fail --file=316_SDP1_FAIL_3_153033_complete.txt
//for import docs in mongodb

//تعداد شارژ شده های یک روز 
db.getCollection('20200315').distinct("msisdn",{"event-type":"1.5","status" : "0"}).length

// تعداد شارژ ننشده های یگ روز 

db.getCollection('20200315').distinct("msisdn",{"status" : "1"}).length

//تعداد لغو

db.getCollection('20200315').distinct("msisdn",{"event-type":"1.2","status" : "0"}).length

//عضو جدید

db.getCollection('20200315').distinct("msisdn",{"event-type":"1.1","status" : "0"}).length

//کسانی که در هفته قبل اصلن شارژ نشدن

db.getCollection('result').distinct("msisdn",{"status" : "0"}).length


//استخراج تعداد داده های در روز بخصوص

db.getCollection('20200315').find({"datetime":/2020-03-15/}).count()

//گرفتن خروجیtxt , csv , exlx  mongo db

//خروجی aggregate  در یه کولیکشن

db.getCollection('20200315').aggregate([{$match: {'status':'1'}},{$group: { _id : { msisdn : "$msisdn"},
'count':{$sum : 1}}},{$sort:{"count":-1}},{$out : "result1503"}],{allowDiskUse:true})

//تعداد تاچ های همراه اول در طول روز 15.03.2020 
//  شماره های همراه اول گرو‍ب کردن 
db.getCollection('20200315').aggregate([{$group: { _id : { msisdn : "$msisdn"},'count':{$sum : 1}}},
{$sort:{"count":-1}}],{allowDiskUse:true})


//تعداد شماره ها با ستاتوس فقط یک ******************************************۸
db.getCollection('big09').aggregate([{$match: {'status':'1'}},
{$group: { _id : { msisdn : "$msisdn"}, 'count':{$sum : 0}}},{$out : "fail09"}/*کبی در کالیکشن جدید */],{allowDiskUse:true})




//تعداد ریزالت های مختلف r
db.getCollection('irancell_sdp_charge_2020426').aggregate([{$group:{_id: {r:'$r'},'count':{$sum:-1}}}])