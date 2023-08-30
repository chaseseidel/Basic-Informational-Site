const http = require("http");
const fs = require("fs/promises");

const host = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/": {
      fs.readFile(__dirname + "/index.html").then((data) => {
        res.writeHead(200);
        res.end(data);
      });
      break;
    }
    case "/about": {
      fs.readFile(__dirname + "/about.html").then((data) => {
        res.writeHead(200);
        res.end(data);
      });
      break;
    }
    case "/contact": {
      fs.readFile(__dirname + "/contact-me.html").then((data) => {
        res.writeHead(200);
        res.end(data);
      });
      break;
    }
    default: {
      fs.readFile(__dirname + "/404.html").then((data) => {
        res.writeHead(404);
        res.end(data);
      });
      break;
    }
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
