
const Watchlist = require("../models/watchlistModel");
const asyncHandler = require('express-async-handler');


const  addToWatchlist = asyncHandler(async(req,res)=>{
 
    try {
      const {movieID,userID,type} = req.body;
      console.log(movieID,userID,type);
      const watchlist = await Watchlist.findOne({ userId: userID });
      console.log(watchlist);
      if (!watchlist && type === "movie") {
        const newWatchlist = new Watchlist({
          userId: userID, 
          movies: [movieID],
        });
  
        await newWatchlist.save();
        res.status(201).json({ message: 'Movie added to watchlist' });
      } else if (watchlist && type === "movie") {
        watchlist.movies.push(movieID);
        await watchlist.save();
        res.status(200).json({ message: 'Movie added to watchlist' });
      }

      if (!watchlist && type === "tv") {
        const newWatchlist = new Watchlist({
          userId: userID, 
          tv: [movieID],
        });
  
        await newWatchlist.save();
        res.status(201).json({ message: 'Tv added to watchlist' });
      } else if (watchlist && type === "tv") {
        watchlist.tv.push(movieID);
        await watchlist.save();
        res.status(200).json({ message: 'Tv added to watchlist' });
      }



    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }); 

  const getWatchlist = asyncHandler(async(req,res)=>{
    //  console.log(req);
    try {
       const {userid} = req.query;
       console.log(userid);
       const foundWatchlist = await Watchlist.findOne({ userId: userid });
        console.log(foundWatchlist);
        if (foundWatchlist) {
          res.status(200).json({foundWatchlist});
        } else {
          res.status(404).json({ message: 'Watchlist list not found' });
  }
     } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
     }
    }); 


    const unlikes = asyncHandler(async(req,res)=>{
      try {
         const { movieID, userID, type } = req.body;
         console.log(movieID, userID, type);
         const watchlist = await Watchlist.findOne({ userId: userID });
         console.log(watchlist);
         if (!watchlist) {
           return res.status(404).json({ message: 'Watchlist not found' });
         }
   
         if (type === "movie") {
           const index = watchlist.movies.indexOf(movieID);
           if (index === -1) {
             return res.status(404).json({ message: 'Movie not found in the watchlist' });
           }
           watchlist.movies.splice(index, 1);
         } else if (type === "tv") {
           const index = watchlist.tv.indexOf(movieID);
           if (index === -1) {
             return res.status(404).json({ message: 'TV show not found in the watchlist' });
           }
           watchlist.tv.splice(index, 1);
         }
   
         await watchlist.save();
         res.status(200).json({ message: 'Removed from Watchlist' });
   
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Server error' });
       }
   }); 

  module.exports={addToWatchlist,getWatchlist,unlikes};