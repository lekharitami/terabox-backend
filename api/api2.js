export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  // For now just return test response
  res.status(200).json({
    message: "Backend working!",
    your_url: url
  });
}
