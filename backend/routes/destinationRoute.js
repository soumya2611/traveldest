import express from "express";
import { addDestination, getDestination } from "../controllers/destinationController.js";
import upload from '../middlewares/multer.js';

const destinationRouter = express.Router();

destinationRouter.post(
  "/add-destination",
  upload.array('image',4),
  addDestination
);

destinationRouter.get("/all-detstination",getDestination)
export default destinationRouter;
