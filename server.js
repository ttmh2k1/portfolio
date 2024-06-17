const http = require("http");
const fs = require("fs");
const path = require("path");

// const PORT = process.env.PORT || 8000;
const VISITS_FILE = path.join(__dirname, "visits.json");

// Hàm đọc số lượt truy cập từ tệp JSON
function readVisitCount() {
  try {
    const data = fs.readFileSync(VISITS_FILE);
    const { count } = JSON.parse(data);
    return count;
  } catch (error) {
    console.error("Error reading visits file:", error);
    return 0;
  }
}

// Hàm ghi số lượt truy cập vào tệp JSON
function writeVisitCount(count) {
  try {
    fs.writeFileSync(VISITS_FILE, JSON.stringify({ count }));
  } catch (error) {
    console.error("Error writing visits file:", error);
  }
}

// Tạo server HTTP đơn giản
const server = http.createServer((req, res) => {
  if (req.url === "/api/visitCount") {
    if (req.method === "GET") {
      const count = readVisitCount();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count }));
    } else if (req.method === "POST") {
      let count = readVisitCount();
      count++;
      writeVisitCount(count);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count }));
    }
  } else {
    // Serve static files (e.g., index.html, script.js)
    let filePath = path.join(
      __dirname,
      req.url === "/" ? "/index.html" : req.url
    );
    const extname = path.extname(filePath);
    let contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".jpg":
        contentType = "image/jpeg";
        break;
      case ".png":
        contentType = "image/png";
        break;
    }
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == "ENOENT") {
          res.writeHead(404);
          res.end("404 Not Found");
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  }
});

// Lắng nghe trên cổng PORT
server.listen(PORT, () => {
  console.log(`Server is running on https://ttmh2k1.github.io/portfolio/`);
});
