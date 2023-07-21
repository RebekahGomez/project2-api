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