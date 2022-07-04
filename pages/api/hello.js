import nextConnect from "next-connect";
import { uploadFile } from "../../helpers/s3";
import multer from "multer";
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect();

apiRoute.post(upload.single("data"), async (req, res) => {
  const uploadRes = await uploadFile(req.file);
  await unlinkFile(req.file.path);
  res.status(200).json(uploadRes);
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
