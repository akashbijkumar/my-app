const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function resolveRequestPath(urlPath) {
  const cleanPath = decodeURIComponent((urlPath || "/").split("?")[0]);
  const relativePath = cleanPath === "/" ? "index.html" : cleanPath.replace(/^\/+/, "");
  
  // Prevent path traversal by checking for suspicious patterns
  if (relativePath.includes("..") || relativePath.includes("~")) {
    return null;
  }
  
  const fullPath = path.resolve(path.join(ROOT_DIR, relativePath));

  // Ensure the resolved path is within ROOT_DIR
  if (!fullPath.startsWith(path.resolve(ROOT_DIR))) {
    return null;
  }

  return fullPath;
}

const server = http.createServer((req, res) => {
  const requestPath = resolveRequestPath(req.url);

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  if (!requestPath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(requestPath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>404 Not Found</h1><p>The requested file does not exist.</p>");
      return;
    }

    const ext = path.extname(requestPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600",
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff"
    });

    const stream = fs.createReadStream(requestPath);

    stream.on("error", () => {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Server Error");
    });

    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log("===================================================");
  console.log("UBJ Houseboats server is running.");
  console.log(`Open http://localhost:${PORT}`);
  console.log("===================================================");
});
