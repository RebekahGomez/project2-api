import mongoose from "mongoose";

const Schema = mongoose.Schema

const Artwork = new Schema({
  artist: String, // mapped from artist_display
  title: String,
  origin: String, // mapped from place_of_origin
  date: String, // mapped from date_display
  medium: String, // mapped from medium_display
  imageId: String // mapped from image_id
})

export default mongoose.model("Artwork", Artwork)