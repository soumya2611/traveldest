import express from "express";
import {
  addDestination,
  getDestinationByName,
  getDestination,
  getDestinationByDistrict,
  getDestinationByCategory,
  updateDestination,
  getDestinationById,
  deleteDestination,
} from "../controllers/destinationController.js";
import upload from '../middlewares/multer.js';

const destinationRouter = express.Router();

destinationRouter.post(
  "/add-destination",
  upload.array('image',4),
  addDestination
);
destinationRouter.post('/update-destination/:id',upload.none(),updateDestination)
destinationRouter.get("/all-detstination", getDestination)
// data by district
destinationRouter.get("/district/:district", getDestinationByDistrict)
//data by Destination Name
destinationRouter.get("/destination-name/:name", getDestinationByName);
destinationRouter.get("/:id", getDestinationById);
destinationRouter.delete("/:id", deleteDestination);
destinationRouter.get("/category/:category", getDestinationByCategory);


export default destinationRouter;
