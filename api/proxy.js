import { createBareServer } from "@titaniumnetwork-dev/ultraviolet";

const uv = createBareServer("/bare/"); // Serverless-ready

export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    res.status(400).send("No URL provided");
    return;
  }

  try {
    // Route the request through Ultraviolet
    return uv.routeRequest(req, res);
  } catch (err) {
    console.error("Geo Proxy Error:", err);
    res.status(500).send("Geo Proxy Internal Error");
  }
}