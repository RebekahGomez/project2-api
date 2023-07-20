import { Router } from "express";
const router = Router()
// import express from "express";

import { getAll, searchName } from "./controller.js"

// all of these point to functions in controller.js
// remember to change the names below

router.get("/", getAll)
router.get("/artist/:name", searchName)
// router.get("/:something2", artworkController.something2)
// router.get("/:something3", artworkController.something3)
// router.post("/", artworkController.create)
// router.put("/:something4", artworkController.edit)
// router.delete("/:something5", artworkController.remove)

export default router