const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

//connect to mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes 
app.use(router);

app.listen(PORT, () => {
    console.log(`app runnig on port ${PORT}!`);
});