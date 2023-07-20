import Artwork from "./model.js"

// functions go here - connected to artwork/router.js
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

export const searchName =
  (req, res) => {
    Artwork
      .find({ artist: req.params.name })
      .then(artwork => res.json(artwork))
      .catch(error => {
        console.log(error);
        res.status(404).json({ error: error.message });
      });
  }
