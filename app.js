const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT;
const router = require("./router.js");

const app = express();
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
