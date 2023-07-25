# API ARTWORK
## Info
- This API is a collection of 1,000 artwork entries from the Art Institute of Chicago
- Data was taken from the [Art Institude of Chicago API](https://api.artic.edu/docs/#introduction)
- [Specific API used](https://api.artic.edu/api/v1/artworks)
- Base URL for Deployed API using [Vercel](https://project2-api.vercel.app/) best viewed via Google Chrome

## Model
- This API has one model to include the: artist, title of the artwork, origin, date the art was created, the medium used for the artwork, the image ID, and a link to the artwork
- Search results are Case Sensitive and must be an exact match

| Slug | Description |
|------| ----------- |
| /   | See all the artworks & associated information in the gallery API
| /artist/:name | Search for artwork via artists' names
| /title/:title | Search for artwork via the title
| /origin/:origin | Search for artwork from a specific location (EG: United States)
| /date/:date | Search for artwork via a specific date
| /medium/:medium | Search for artwork based on the medium used. *Remember: the search will only populate results with exact matches, EG: searching for "ink" may not return a result, but searcing for "Black ink and pencil on tan wove paper" will.
| /id/:id | Search for a specific artwork using the imageId --> remember to use the imageId in the model, not the auto-generated _id
| /    | Create their own artwork submission using Postman
| /:id | Update artwork information in the database using Postman
| /:id | Delete artworks from the database using Postman


## IMAGE URL
- Each model includes an image URL.  There are some cases where a piece of artwork does not have an associated image (EG: perhaps the artwork has not been digitized). For imageURLs that are "null" or "undefined", the user will be redirected to a [204 error page](https://http.cat/status/204).
- URL structure for viewing images of the artwork comes from IIIF (International Image Interoperability Framework), which The Art Institute of Chicago uses as a standard for serving images: https://www.artic.edu/iiif/2/$[IMAGE_ID]/full/843,/0/default.jpg
### Image URL Breakdown
- https://www.artic.edu/iiif/2/: This is the base URL for IIIF images from the Art Institute of Chicago.
- [IMAGE_ID]: This is where you insert the unique identifier for each image.
/full/: This specifies the region of the image you want. "Full" means the entire image.
- 843,/: This specifies the size you want.'843,' means a width of 843 pixels and a dynamic height to maintain the aspect ratio. You can change this number to get different widths or use ' ,843' to set the height and have a dynamic width.
- 0/: This is the rotation in degrees. 0 means no rotation.
- default.jpg: This is the quality and format. "Default" is typically a good-quality JPEG. There are other options you can specify based on the IIIF standard.

## Notes
- In seed.js, I have included 2 methods for seeding the data and commented out one of the methods. Two different methods to do the same thing, just for my own practice.
- This API uses "type": "module" to use the "import syntax" when connecting files