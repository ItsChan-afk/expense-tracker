const express = require("express");
const app = express();
const cors = require("cors");
const DbConnection = require("./dbConnection/dbConnection");
const dotenv = require("dotenv").config();
const TransactionModel = require("./models/Transaction");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

DbConnection();

app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("/api/transaction", async (req, res) => {
  console.log(req.body);

  const { name, price, description, dateTime } = req.body;

  const transaction = await TransactionModel.create({
    name,
    price,
    dateTime,
    description,
  });

  res.json(transaction);
});

app.get("/api/transaction", async (req, res) => {
  const getData = await TransactionModel.find();
  res.json(getData);
});

app.listen(PORT, () => {
  console.log("Server Started");
});
