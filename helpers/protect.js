const protectAPI = (handler) => {
  return async (req, res) => {
    if (
      new URL(req.headers.referer).origin &&
      new URL(req.headers.referer).origin !== "http://localhost:3000"
    ) {
      return res.json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
