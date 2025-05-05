const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html and static files

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  res.json({ message: '✅ Thank you for contacting us!' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
