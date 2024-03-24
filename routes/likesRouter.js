const express = require("express");
const {likes, getFavourite,unlikes} = require("../controllers/likesController");

const likesRouter = express.Router();
likesRouter.route('/likes').post(likes);
likesRouter.route('/likes-data').get(getFavourite);
likesRouter.route('/unlike').post(unlikes);

module.exports=likesRouter;
