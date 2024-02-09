const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to my homepage");
  } else if (req.url === "/about") {
    res.write("Welcome to about page");
  } else if (req.url === "/contact") {
    res.write("Contact me @......");
  } else {
    res.write("No such URL found");
  }
  res.end();
});
const port = 4000;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
module.exports = { server };
