const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();

require("./routes/auth")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
