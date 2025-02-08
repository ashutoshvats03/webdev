const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory data store (raw data)
let dataStore = [
  { id: 1, field1: 'Sample Data 1', field2: 10 },
  { id: 2, field1: 'Sample Data 2', field2: 20 }
];


// POST route to add new data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  newData.id = dataStore.length + 1;
  dataStore.push(newData);
  res.json({ status: 'success', data: newData });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
