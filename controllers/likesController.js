
const Likes = require("../models/likesModel");
const asyncHandler = require('express-async-handler');


const likes = asyncHandler(async(req,res)=>{
   try {
      const {movieID,userID,type} = req.body;
      console.log(movieID,userID,type);
      const liked = await Likes.findOne({ userId: userID });
      console.log(liked);
      if (!liked && type === "movie") {
        const newLikedlist = new Likes({
          userId: userID, 
          movies: [movieID],
        });
  
        await newLikedlist.save();
        res.status(201).json({ message: 'Movie added to Favourite list' });
      } else if(liked && type === "movie") {
         liked.movies.push(movieID);
        await liked.save();
        res.status(200).json({ message: 'Movie added to Favourite list' });
      }

      if (!liked && type === "tv") {
        const newLikedlist = new Likes({
          userId: userID, 
          tv: [movieID],
        });
  
        await newLikedlist.save();
        res.status(201).json({ message: 'Tv added to Favourite list' });
      } else if(liked && type === "tv") {
         liked.tv.push(movieID);
        await liked.save();
        res.status(200).json({ message: 'Tv added to Favourite list' });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }); 

  const getFavourite = asyncHandler(async(req,res)=>{
  //  console.log(req);
  try {
     const {userid} = req.query;
     console.log(userid);
     const foundLikes = await Likes.findOne({ userId: userid });
      console.log(foundLikes);
      if (foundLikes) {
        res.status(200).json({foundLikes});
      } else {
        res.status(404).json({ message: 'Favourite list not found' });
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
       const liked = await Likes.findOne({ userId: userID });
       console.log(liked);
       if (!liked) {
         return res.status(404).json({ message: 'Liked list not found' });
       }
 
       if (type === "movie") {
         const index = liked.movies.indexOf(movieID);
         if (index === -1) {
           return res.status(404).json({ message: 'Movie not found in the liked list' });
         }
         liked.movies.splice(index, 1);
       } else if (type === "tv") {
         const index = liked.tv.indexOf(movieID);
         if (index === -1) {
           return res.status(404).json({ message: 'TV show not found in the liked list' });
         }
         liked.tv.splice(index, 1);
       }
 
       await liked.save();
       res.status(200).json({ message: 'Removed from Favourite list' });
 
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Server error' });
     }
 }); 

  module.exports={likes,getFavourite,unlikes};