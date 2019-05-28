const express = require("express");
const path = require("path");
const members = require("./members");

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};
// init middleware
app.use(logger);

// Gets All Members
app.get("/api/members", (req, res) => {
  res.json(members);
});

//Get Single Member;
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

//Set a static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
