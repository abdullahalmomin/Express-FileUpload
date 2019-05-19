const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
app.set("view engine", "ejs");
app.use(fileUpload({ createParentPath: true }));

const Router = express.Router();
app.use(Router);

Router.get("/", (req, res) => {
  res.render("index");
});

Router.post("/", (req, res) => {
  const photo = req.files.profilePhoto;
  photo.mv(__dirname + "/uploads/text.jpg", err => {
    if (err) return res.send(err).catch();
    res.send("file uploaded");
  });
});
app.listen(3000, () => {
  console.log("server running");
});
