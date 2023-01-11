const express = require("express");
const app = express();
const PORT = 8000;

app.get("/hello", (req, res) => {
    console.log(req);
    res.json("Hello World");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
