const fs = require("fs");
import s3 from "aws-sdk/clients/s3";
import { uid } from "uid";

const client = new s3({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const uploadFile = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Body: fileStream,
    Key: uid(),
  };

  try {
    return await client.upload(params).promise();
  } catch (error) {
    console.log(error);
  }
};

function getFileStream(key) {
  const downloadParams = {
    Key: key,
    Bucket: process.env.BUCKET_NAME,
  };
  return client.getObject(downloadParams).createReadStream();
}

export { uploadFile, getFileStream };
