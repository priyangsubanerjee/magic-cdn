const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const multer = require("multer");
const dotenv = require("dotenv");
const { uploadFile, getFileStream } = require("./backend/s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const cors = require("cors");
const upload = multer({
  dest: "tmp/",
});

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "frontend")));

// app.post("/", upload.single("data"), async function (req, res) {
//   const file = req.file;
//   const response = await uploadFile(file);
//   await unlinkFile(file.path);
//   res.json(response);
// });

// app.get("/v1/:id", (req, res) => {
//   const id = req.params.id;
//   const read = getFileStream(id);
//   read.pipe(res);
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
