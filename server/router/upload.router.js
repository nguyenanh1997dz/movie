const multer = require("multer");
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const storage = require("../config/firebaseStorage");
const router = express.Router();
const { HandleError } = require("../middleware/error");
const upload = multer({
  storage: multer.memoryStorage(),
});
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (file) {
      const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
      const blob = storage.file(fileName);
      const blobStream = blob.createWriteStream({
        resumable: false,
        metadata: {
          contentType: file.mimetype,
        },
      });
      blobStream.on("error", (error) => {
        throw new Error(400,`Error uploading file: ${error.message}`);
      });
      blobStream.on("finish", () => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
        res.json(publicUrl)
      });
      blobStream.end(file.buffer);
    } else {
      throw new Error("No file uploaded.");
    }
  } catch (error) {
    throw new HandleError(400, error.message);
  }
});
router.get("/", async (req, res) => {
  try {
    res.send("oke");
  } catch (error) {
    throw new HandleError(400, error.message);
  }
});
module.exports = router;
