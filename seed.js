import Artwork from "./artwork/model.js"
import artworkData from "./artwork/artwork.json" assert {type: "json"}
import connection from "./connection.js"

// This function transforms the original names for the items in the object
// and gives them more identifiable names (EG: "artist_title" changes to "artist")
function transformOriginalData(originalData) {
  return {
    artist: originalData.artist_title,
    title: originalData.title,
    origin: originalData.place_of_origin,
    date: originalData.date_display,
    medium: originalData.medium_display,
    imageId: originalData.image_id
  }
}

const transformedData = artworkData.data.map(transformOriginalData);

// Method 1 for seeding data
// this clears the database of everything then inserts the Artwork
// which we've linked from our model.js file and artwork.json file -->
// the artwork.json file was automatically populated from the download.js file

// Artwork.deleteMany({})
//   .then(() => {
//     return Artwork.insertMany(transformedData);
//   })
//   .then(insertedArtworks => {
//     console.log(insertedArtworks);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// Method 2 for seeding data
// With this method, we call the function at the end

const insertData = async () => {
  await connection.dropDatabase();
  await Artwork.insertMany(transformedData);
  connection.close();
}

insertData();