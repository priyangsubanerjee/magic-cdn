import { getFileStream } from "../../../helpers/s3";
export default async function (req, res) {
  const key = req.query.key;
  const response = await getFileStream(key);
  response.pipe(res);
}
