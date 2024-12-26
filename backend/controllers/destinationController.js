import destinationModel from "../models/destinationModel.js";
import { v2 as cloudinary } from "cloudinary";


//adding """"""""""""""""""""""destination"""""""""""""""""""""";

const addDestination = async (req, res) => {
  try {
    const { name, location, district, description, category, parking } =
      req.body;

    if (!name || !location || !description || !district) {
      return res.json({ success: false, message: "missing details" });
    }
    //upload logics for image to upload on cloudinary
    if (!req.files) {
      return res.json({ success: false, message: "image files are re quired" });
    }

    const imageFiles = req.files.map((file) => file.path);
    const uploadedImages = [];

    for (const filePath of imageFiles) {
      const imageUpload = await cloudinary.uploader.upload(filePath, {
        resource_type: "image",
      });
      uploadedImages.push(imageUpload.secure_url);
    }
    const destinationData = {
      name,
      location,
      district,
      image: uploadedImages,
      description,
      category,
      parking,
    };

    const newDestination = new destinationModel(destinationData);
    await newDestination.save();
    res.json({
      success: true,
      message: "destination added successfully",
      newDestination,
    });
    console.log("added successfully");
    //console.log(newDestination);
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};
//getiing """""""""""""""""""all DESTINATION""""""""""""""""""" for home page

const getDestination = async (req, res) => {
  try {
    const data = await destinationModel.find({});
    if (data.length <= 0) {
      return res.json({ success: false, message: "no destination found" });
    }
    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
//DESTINATION FOR """""""DISTRICT"""""" WISE

const getDestinationByDistrict = async (req, res) => {
  try {
    const district = req.params.district;
    const data = await destinationModel.find({
      district: { $regex: new RegExp(district, "i") },
    });
    console.log(data);
    return res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
//DESTINATION BY NAME OF THE """"Name"""" of the place
const getDestinationByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await destinationModel.find({
      name  : { $regex: new RegExp(name, "i") },
    });
    //console.log(data)
    res.json({success:true,data})
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}
//DESTINATION BY NAME OF THE """" CATEGORY"""" of the place
const getDestinationByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const data = await destinationModel.find({
      category  : { $regex: new RegExp(category, "i") },
    });
    //console.log(data)
    res.json({success:true,data})
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
}
export {
  addDestination,
  getDestination,
  getDestinationByDistrict,
  getDestinationByName,
  getDestinationByCategory,
};
