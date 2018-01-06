const path = require('path');
const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId();

const recordModel = require('./RecordSchema');

const createRecord = (record) =>{
    return new Promise(function(resolve, reject){
        newRecord = new recordModel({
            name: "name",
            time: 100,
            records: [1,2,3]
        })
        newRecord.save((err, data)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })
} 

module.exports = {
    createRecord
}