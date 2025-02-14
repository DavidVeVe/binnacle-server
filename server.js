const express = require("express");
const cors = require("cors");
const mockData = require("./mock-data.json");

const port = 3000;
const App = express();
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.get("/", (req, res) => {
  res.status(200).json({ data: mockData });
});

App.get("/profile/:profileId", (req, res) => {
  const selectedProfile = mockData.find(
    (item) => item.id === +req.params.profileId
  );

  res.status(200).json({ data: selectedProfile });
});

App.post("/profile/:profileId/addService", (req, res) => {
  const data = req?.body;
  console.log(data)
  const selectedProfileIndex = mockData.findIndex(
    (profile) => profile.id === +data.id
  );
  mockData[selectedProfileIndex].currentServices.push(data.data);
  res.status(201).json({ message: "Service started.", endTime: 293423908 });
});

App.listen(port, () => console.log(`Appr running on port ${port}`));
