import Artwork from "./model.js"
import axios from "axios";

// FUNCTIONS - connected to artwork/router.js
// See all artwork entries
export const getAll =
  (req, res) => {
    Artwork
      .find({})
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// Search for artist's name
export const searchName =
  (req, res) => {
    Artwork
      .find({ artist: req.params.name })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// Search for art based on title
export const searchTitle =
  (req, res) => {
    Artwork
      .find({ title: req.params.title })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// Search for art based on origin
export const searchOrigin =
  (req, res) => {
    Artwork
      .find({ origin: req.params.origin })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// Search for art with specific date
export const searchDate =
  (req, res) => {
    Artwork
      .find({ date: req.params.date })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// Search for art made with specific medium
export const searchMedium =
  (req, res) => {
    Artwork
      .find({ medium: req.params.medium })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      })
  }

// Search for art based on the associated imageId
export const searchImageId =
  (req, res) => {
    Artwork
      .find({ imageId: req.params.id })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// Create function for adding own artwork
export const createArt =
  (req, res) => {
    const artwork = new Artwork(req.body);
    artwork.save()
      .then(savedArt => res.status(201).json(savedArt))
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  };

// Update function for changing existing artwork
export const updateArt =
  (req, res) => {
    const { id } = req.params
    Artwork.findByIdAndUpdate(id, req.body, { new: true })
      .then(updatedArtwork => {
        if (updatedArtwork) {
          res.status(200).json(updatedArtwork);
        } else {
          throw new Error("Artwork not found");
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      })
  };

// Delete function for removing artwork
export const deleteArt =
  (req, res) => {
    const { id } = req.params;
    Artwork.findByIdAndDelete(id)
      .then(deleted => {
        if (deleted) {
          res.status(200).send("Artwork deleted")
        } else {
          throw new Error("Artwork not found");
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
  }

// function for pagination - not operable yet
// export const getArtworks =
//   (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 20;

//     const apiURL = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;

//     axios.get(apiURL)
//       .then(apiResponse => {
//         const artworks = apiResponse.data;
//         res.json(artworks);
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//       })
//   }