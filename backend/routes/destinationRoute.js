import express from "express";
import {
  addDestination,
  getDestinationByName,
  getDestination,
  getDestinationByDistrict,
  getDestinationByCategory,
} from "../controllers/destinationController.js";
import upload from '../middlewares/multer.js';

const destinationRouter = express.Router();

destinationRouter.post(
  "/add-destination",
  upload.array('image',4),
  addDestination
);

destinationRouter.get("/all-detstination", getDestination)
// data by district
destinationRouter.get("/destination-district/:district", getDestinationByDistrict)
//data by Destination Name
destinationRouter.get("/destination-name/:name", getDestinationByName);
destinationRouter.get("/destination-category/:category", getDestinationByCategory);


export default destinationRouter;
