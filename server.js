const express = require("express");
const mockData = require("./mock-data.json")

const App = express();
const port = 3000;

App.get("/", (req, res) => {
  console.log(req);

  return new Promise((resolve, rej) => {
    setTimeout(() => {
      res.status(200).json({ data: mockData  });
    }, [3000]);
  });
});

App.listen(port, () => console.log(`Appr running on port ${port}`));
