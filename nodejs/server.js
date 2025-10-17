import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from server");
  } 
  else if (req.url === "/home") {
    res.end("This is the home page");
  } 
  else if (req.url === "/about") {
    res.end("This is the about page");
  } 
  else {
    res.statusCode = 404;
    res.end("Error 404 - Page not found");
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

