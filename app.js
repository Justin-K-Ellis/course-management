const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 4000;
const router = require("./router.js");

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
