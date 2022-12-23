const express = require("express");
const app = express();
const PORT = 8000;
const { pokemon1, pokemon2, pokemon3 } = require("./data/pokemon");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/pokemon.routes")(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
