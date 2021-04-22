const express = require("express");
const mongojs = reuqire ("mongojs");

const app = express();

const databaseUrl = "workout";
const collections = ["exercises"];

const db = mongojs (databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});