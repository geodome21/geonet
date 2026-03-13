import { createServerlessHandler } from "@titaniumnetwork-dev/ultraviolet";

const uv = createServerlessHandler();

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) {
    res.status(400).send("No URL provided");
    return;
  }

  try {
    return uv(req, res); // Serverless-safe
  } catch (err) {
    console.error("Geo Proxy Error:", err);
    res.status(500).send("Geo Proxy Internal Error");
  }
}