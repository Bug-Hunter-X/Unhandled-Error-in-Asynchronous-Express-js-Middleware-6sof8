const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const data = { message: 'Hello from Express!' };
      res.json(data.message);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});