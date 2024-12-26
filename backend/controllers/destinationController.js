import destinationModel from "../models/destinationModel.js";
import { v2 as cloudinary } from "cloudinary";

const addDestination = async (req, res) => {
  try {
   
    const { name, location, district, description, category, parking } =
      req.body;

      if (!name || !location || !description || !district) {
        return res.json({ success: false, message: "missing details" });
    }
    //upload logics for image to upload on cloudinary
    if (!req.files) {
      return res.json({success:false,message:"image files are re quired"})
    }

//     const imageFile = req.files.map(file=>file.path);
// console.log(imageFile)

//     //-----if name,loc,desc not there it return error----//

//     //ADDING IMAGE TO CLOUDINARY
    
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//       resource_type: "image",
//     });
//     console.log('first')
// console.log(imageUpload)
    //     const imageUrl = imageUpload.secure_url;
    
      const imageFiles = req.files.map((file) => file.path);
      const uploadedImages = [];

      for (const filePath of imageFiles) {
        const imageUpload = await cloudinary.uploader.upload(filePath, {
          resource_type: "image"
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
    res.json({ success: true, message: "destination added successfully",newDestination });
    console.log("added successfully");
    console.log(newDestination)
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }
};

const getDestination = async (req, res) => {
  try {
    const data = await destinationModel.find({})
    if (data.length <= 0) {
      return res.json({success:false,message:'no destination found'})
    }
    return res.json({success:true,data})
  } catch (error) {
    console.log(error)
    return res.json({success:false,message:error.message})
  }
}

export { addDestination,getDestination };
