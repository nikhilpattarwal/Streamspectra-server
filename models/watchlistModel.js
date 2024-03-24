const mongoose = require("mongoose");


const watchlistSchema = mongoose.Schema(
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


const Watchlist = mongoose.model('Watchlist', watchlistSchema);

module.exports = Watchlist;