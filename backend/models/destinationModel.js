import mongoose from "mongoose";
const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  district: { type: String, required: true },
  image: [String],
  category: {
    type: String,
    enum: [
      "beach",
      "temple",
      "hill",
      "hillstation",
      "waterfall",
      "park",
      "monastery",
      "hotspring",
      "lake"
    ],
  },
  parking: { type: Boolean, default: true },
});

const destinationModel = mongoose.models.destination || mongoose.model('destination', destinationSchema)

export default destinationModel