import { createBareServer } from "@titaniumnetwork-dev/ultraviolet";
import RammerheadProxy from "@rammerhead/rammerhead";

const uv = createBareServer("/bare/");
const rh = new RammerheadProxy();

export default async function handler(req, res) {

  const backend = req.query.backend || "uv";

  try {

    if (backend === "rh") {
      return rh.handleRequest(req, res);
    }

    return uv.routeRequest(req, res);

  } catch (err) {

    res.statusCode = 500;
    res.end("Geo Proxy Error");

  }

}