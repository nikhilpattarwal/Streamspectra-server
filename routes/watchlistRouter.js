const express = require("express");
const {addToWatchlist, getWatchlist,unlikes} = require("../controllers/watchlistController");

const watchlistRouter = express.Router();
watchlistRouter.route('/watchlist').post(addToWatchlist);
watchlistRouter.route('/watchlist-data').get(getWatchlist);
watchlistRouter.route('/unwatchlist').post(unlikes);

module.exports=watchlistRouter;
