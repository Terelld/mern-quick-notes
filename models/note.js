const mongoose = require('mongoose'); 


const noteSchema = new Schema({
    text: {type:String, required: true},
    user: {type: ObjectId, required: true},
}, {
    timestamps: true,
    toJson: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});
