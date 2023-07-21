# API Project 
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
