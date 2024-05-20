const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyDC9QhefeyH-SAIg2r2YhM9mv3uKjpMdog');

const express = require('express');

const routes = express.Router();

const model = genAI.getGenerativeModel({ model: "gemini-pro"});


routes.get('/', (req, res) => {
    res.send(run());
});

module.exports = (app) => {app.use('/', routes)};



async function run() {
    const prompt = "What was the last 10 presidents of USA?"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();