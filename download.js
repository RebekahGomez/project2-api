// import fetch from "node-fetch";
import { promises as fsPromises } from "fs";

// fetch('https://api.artic.edu/api/v1/artworks?limit=1000')
//   .then(response => response.json())
//   .then(data => fsPromises.writeFile("./artwork.json", JSON.stringify(data)))
//   .catch(error => console.error(error))

// can't use writeFile to get all the data - need to appendFile
// fetch request for page 1, 2, 3 etc. so write a for loop to fetch all the data

const maxPages = 10;

for (let page = 1; page <= maxPages; page++) {
  const apiURL = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=100`;
  fetch(apiURL)
    .then(response => response.json())
    .then(data => fsPromises.appendFile("./artwork2.json", JSON.stringify(data)))
    .catch(error => console.error(error))
}
