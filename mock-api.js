const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.MOCK_API_PORT || 4000;

app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the mock API!' });
});

// Add more endpoints as needed

app.listen(PORT, () => {
  console.log(`\u{1F680} Mock API server running on http://localhost:${PORT}`);
});
