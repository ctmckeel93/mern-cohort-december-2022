const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
const port = 8000;

require('dotenv').config();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config')
require('./routes/users.routes')(app);

app.listen(port, () => console.log("Listening on port", port));