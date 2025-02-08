// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve the main page with an embedded Streamlit app
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node.js and Streamlit Integration</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        h1 {
          background-color: #4CAF50;
          color: white;
          padding: 20px;
          margin: 0;
        }
        iframe {
          width: 100%;
          height: 90vh;
          border: none;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Node.js and Streamlit Integrated App</h1>
      <iframe src="http://localhost:8501" title="Streamlit App"></iframe>
    </body>
    </html>
  `);
});

// Start the Node.js server
app.listen(PORT, () => {
  console.log(`Node.js server is running at http://localhost:${PORT}`);
});
