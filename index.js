import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Tell Express where the views are (Essential for Vercel)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 2. Serve static files from Vite's build output
app.use(express.static(path.join(__dirname, 'dist')));

// 3. The Pink Surfboard Route
app.get('/pink-surfboard', (req, res) => {
    // Make sure the file in /views is exactly 'pink-surfboard.ejs'
    res.render('pink-surfboard', { 
        title: 'Survivor Island - Pink Tier' 
    });
});

export default app;
