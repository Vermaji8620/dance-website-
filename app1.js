//IMPORTING ALL THE MODULES
let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/danceacadeny", {
  useNewUrlParser: true,
});
let fs = require("fs");
let app = express();
let port = 5500;

let contactschema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

let Contact = mongoose.model("Contact", contactschema);

//WHATEVER EXPRESS RELATED STUFF
app.use("/static", express.static("static")); //for serving static files
app.use(express.urlencoded()); //for getting the data of the filled-in details in the webpage

//WHATEVER PUG RELATED STUFF
app.set("view engine", "pug"); //for setting up the pug engine
app.set("views", path.join(__dirname, "views")); //for pointing out to the directory of views

//END POINTS DECLARATION
app.get("/", (req, res) => {
  res.render("home1.pug");
});

app.get("/home", (req, res) => {
  res.render("home1.pug");
});

app.get("/contact", (req, res) => {
  res.render("contact1.pug");
});

app.post("/contact", (req, res) => {
  let mydata = new Contact(req.body);
  mydata
    .save()
    .then(() => {
      res.send("this item has been saved to the database");
    })
    .catch(() => {
      res.send("this item has not been saved to the database");
    });
});

//LISTENING ON SERVER
app.listen(port, () => {
  console.log("the server has been started successfully");
});
