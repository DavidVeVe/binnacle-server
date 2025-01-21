const express = require("express");
const cors = require("cors");
const mockData = require("./mock-data.json");

const port = 3000;
const App = express();
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.get("/", (req, res) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      res.status(200).json({ data: mockData });
    }, 2000);
  });
});

App.listen(port, () => console.log(`Appr running on port ${port}`));
