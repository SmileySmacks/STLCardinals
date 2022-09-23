const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/player-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/cardinals", router);

mongoose.connect(
    "mongodb+srv://SmileySmacks:student1@cluster0.6x6zg5x.mongodb.net/STLCardinals?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => console.log(err));