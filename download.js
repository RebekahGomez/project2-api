import fetch from "node-fetch";
import { promises as fsPromises } from "fs";

fetch('https://api.artic.edu/api/v1/artworks')
  .then(response => response.json())
  .then(data => fsPromises.writeFile("./artwork.json", JSON.stringify(data)))
  .catch(error => console.error(error))