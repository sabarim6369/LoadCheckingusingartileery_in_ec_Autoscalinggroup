const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Helper function to generate dummy data
const generateDummyData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
      value: Math.floor(Math.random() * 1000), // random value between 0-999
    });
  }
  return data;
};

// GET API to return 1000 dummy items
app.get('/api/items', (req, res) => {
  const items = generateDummyData(1000);
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
