# API PROJECT
## Info
- This API was created using Mongoose & Express. Other dependencies are installed
but not currently in use (July 21, 2023)
- This API uses "type": "module" to use the "import syntax" when connecting files
- Data was taken from the [Art Institude of Chicago API] (https://api.artic.edu/docs/#introduction)
- Specific API used: (https://api.artic.edu/api/v1/artworks)

## Model
- This API has one model to include the: artist, title of the artwork, origin, date the art was created, the medium used for the artwork, and a link to the artwork
- The functions allow a user to:
  - See all the artworks & associated information in the gallery
  - Search for artwork via artists' names
  - Search for artwork via the title
  - Search for artwork from a specific location/origin
  - Search for artwork via a specific date
  - Search for artwork based on the medium used (paint, charcoal, etc)
  - Search for a specific artwork using the associated id
  - Create their own artwork submission
  - Update artwork information in the database
  - Delete artworks from the database

## Notes
- In seed.js, I have included 2 methods for seeding the data and just commented out one of the methods. Two different methods to do the same thing, just for my own practice.
- Please don't forget the appropriate slugs when searching for things in the URL (EG: /artist/...  /origin/... etc.)
- When searching for artwork based on id, you must use the imageID, not the auto-generated id

## IMAGE URL
- URL structure for viewing images of the artwork comes from IIIF (International Image Interoperability Framework), which The Art Institute of Chicago uses as a standard for serving images: (https://www.artic.edu/iiif/2/$[IMAGE_ID]/full/843,/0/default.jpg)
### Breakdown
- https://www.artic.edu/iiif/2/: This is the base URL for IIIF images from the Art Institute of Chicago.
- [IMAGE_ID]: This is where you insert the unique identifier for each image.
/full/: This specifies the region of the image you want. "Full" means the entire image.
- 843,/: This specifies the size you want.'843,' means a width of 843 pixels and a dynamic height to maintain the aspect ratio. You can change this number to get different widths or use ' ,843' to set the height and have a dynamic width.
- 0/: This is the rotation in degrees. 0 means no rotation.
- default.jpg: This is the quality and format. "Default" is typically a good-quality JPEG. There are other options you can specify based on the IIIF standard.