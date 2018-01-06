const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId();

const RecordSchema = new Schema({
    name: String,
    time: Number,
    records: []
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('records', RecordSchema);