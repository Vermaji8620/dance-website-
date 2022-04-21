let express = require("express");
let app = express();
let path = require("path");
let fs = require("fs");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/dancedance", {
  useNewUrlParser: true,
}); //connecting to the database of name 'contactdance'
let port = 8000;

//DEFINE MONGOOSE SCHEMA
let contactschema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

let Contact = mongoose.model("Contact", contactschema);

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); //for serving static files
app.use(express.urlencoded()); // for extracting out the data from a form

//PUG SPECIFIC STUFF
app.set("view engine", "pug"); //setting the template engine as pug
app.set("views", path.join(__dirname, "views")); //set the views directory

//ENDPOINTS
app.get("/", (req, res) => {
  let params = {};
  res.render("home.pug", params);
});

app.get("/home", (req, res) => {
  let params = {};
  res.render("home.pug", params);
});

app.get("/contact", (req, res) => {
  let params = {};
  res.render("contact.pug", params);
});

app.post("/contact", (req, res) => {
  let mydata = new Contact(req.body);
  mydata
    .save()
    .then(() => {
      res.send("this item has been saved to the data base");
    })
    .catch(() => {
      res.send("item was not saved to the database");
    });
});

app.get("/index", (req, res) => {
  let params = {};
  res.render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log("the application has started succesfully");
});