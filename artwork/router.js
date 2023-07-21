import { Router } from "express";
const router = Router()

import * as artworkController from "./controller.js"

// all of these routers point to functions in controller.js

router.get("/", artworkController.getAll)
router.get("/artist/:name", artworkController.searchName)
router.get("/title/:title", artworkController.searchTitle)
router.get("/origin/:origin", artworkController.searchOrigin)
router.get("/date/:date", artworkController.searchDate)
router.get("/medium/:medium", artworkController.searchMedium)
router.get("/id/:id", artworkController.searchImageId)
router.post("/", artworkController.createArt);
router.put("/:id", artworkController.updateArt);
router.delete("/:id", artworkController.deleteArt);

export default router

// the router isn't interacting with mongodb - it interacts with the browser and express