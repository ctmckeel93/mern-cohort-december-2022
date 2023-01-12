const express = require("express");
const app = express();
const PORT = 8000;

require("./config/mongoose.config");
require("./routes/dog.routes")(app);

app.listen(PORT, () => console.log("Listening on port " + PORT));
