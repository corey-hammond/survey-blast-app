const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

// Connect to database
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Instantiate Express app
const app = express();

// Use body-parser
app.use(bodyParser.json());

// Use cookie-session
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Use passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/auth")(app);
require("./routes/billing")(app);

// Server connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
