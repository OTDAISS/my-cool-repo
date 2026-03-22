import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Crucial: Point to the dist folder where Vite put the Pink/Blue code
app.use(express.static(path.join(__dirname, '../dist')));

// 1. Home Page (EJS)
app.get('/', (req, res) => {
    res.render('index'); 
});

// 2. Surfboard Hand-off (React)
app.get(['/dashboard-pink', '/dashboard-blue'], (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

export default app;
