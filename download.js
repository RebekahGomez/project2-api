import { promises as fsPromises } from "fs";

const maxPages = 10;

for (let page = 1; page <= maxPages; page++) {
  const apiURL = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=100`;
  fetch(apiURL)
    .then(response => response.json())
    .then(data => fsPromises.appendFile("./artwork2.json", JSON.stringify(data)))
    .catch(error => console.error(error))
}
