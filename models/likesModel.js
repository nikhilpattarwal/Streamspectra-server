const mongoose = require("mongoose");


const likesSchema = mongoose.Schema(
    {
      userId:{
        type:String,
        required:true,
      },
      movies:{
        type: [String],
    },
    tv:{
      type:[String],
     }
 
}, {timestamps: true,})


const Likes = mongoose.model('Likes', likesSchema);

module.exports = Likes;