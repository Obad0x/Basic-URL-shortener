const mongoose = require('mongoose');
const shortUUID = require('short-uuid');
const Schema = mongoose.Schema;



const UrlSchema = new Schema({
                LongUrl : {
                    type : String,
                    required : true
                },
                ShortUrl :{
                        type : String,
                        default : shortUUID.generate(),
                        required : true
                }
                 
})


module.exports = mongoose.model('url' , UrlSchema);