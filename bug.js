const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const data = { message: 'Hello from Express!' };
    // This line can cause an error if data.message is not defined
    res.json(data.message); 
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});