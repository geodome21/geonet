import { createBareServer } from "@titaniumnetwork-dev/ultraviolet";

const uv = createBareServer("/bare/");

export default async function handler(req, res) {

  try {
    return uv.routeRequest(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end("Geo Proxy Error");
  }

}