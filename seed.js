import Artwork from "./artwork/model.js"
import artworkData from "./artwork/artwork.json" assert {type: "json"}
import connection from "./connection.js"

import axios from 'axios';
import fs from 'fs';

async function fetchData() {
  const response = await axios.get('https://api.artic.edu/api/v1/artworks');
  return response.data;
}

fetchData().then(data => {
  fs.writeFileSync('artwork/artwork.json', JSON.stringify(data, null, 2));
});

Artwork.remove({})
Artwork.collection.insert(artworkData)
  .then(artworkData => {
    console.log(artworkData)
  })
  .catch(err => {
    console.log(err)
  })

