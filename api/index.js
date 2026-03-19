import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Point to the root folders from inside /api
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// --- SURFER ROUTES ---

// Home Page
app.get('/', (req, res) => {
    res.render('index'); 
});

// Direct these URLs to the Vite-built React app
// React will then look at src/pages/free.jsx or members.jsx
app.get(['/dashboard-pink', '/dashboard-blue'], (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

export default app;
