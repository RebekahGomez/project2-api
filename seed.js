import Artwork from "./artwork/model.js"
import artworkData from "./artwork/artwork.json" assert {type: "json"}
import connection from "./connection.js"

function transformOriginalData(originalData) {
  return {
    artist: originalData.artist_title,
    origin: originalData.place_of_origin,
    date: originalData.date_display,
    medium: originalData.medium_display,
    imageId: originalData.image_id
  }
}

const transformedData = artworkData.data.map(transformOriginalData);

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

// this is another way of doing the above
//  with this method, we call the function at the end

const insertData = async () => {
  await connection.dropDatabase();
  await Artwork.insertMany(artworkData);
  db.close();
}

insertData();