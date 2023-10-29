const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });  

// Array to store the URLs
const urls = [
  "https://proud-sky-8d21.carol321.workers.dev/",
  "https://rending7.onrender.com/",
  "https://desipient79.onrender.com/",
  "https://longtruth.drabettes168967.workers.dev/",
  "https://replitkalilinux--clydeferoliho6.repl.co/",
  "https://loadserver.onrender.com/",
  // Add more URLs here
];

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    const status = response.status;
    return status;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return console.error;
  }
};

const keepReplAlive = () => {
  // Fetch data for each URL
  urls.forEach((url) => {
    fetchData(url);
  });
};

setInterval(keepReplAlive, 4 * 60 * 1000); // 4 minutes

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/status", async (req, res) => {
  const statusList = {};
  for (const url of urls) {
    const status = await fetchData(url);
    statusList[url] = status;
  }
  res.json(statusList);
});

app.get("/keepalive", (req, res) => {
  res.send("Keep-alive is working!");
});

module.exports = app;
