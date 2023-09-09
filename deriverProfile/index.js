
import express from 'express';

const app = express();

// Define a GET route
app.get('/api', (req, res) => {
    res.json({ message: 'profile service health ok' });
  });

// Start your Express server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`profileService is running on port ${port}`);
});
