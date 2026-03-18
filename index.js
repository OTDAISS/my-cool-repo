import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- 1. SETTINGS ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- 2. MIDDLEWARE (FIXED) ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This was empty before—now it has next() to prevent 504 timeouts
app.use((req, res, next) => {
    console.log(`Survivor Request: ${req.url}`);
    next(); 
});

// Serve the static files Vite generates (CSS/JS/Images)
app.use(express.static(path.join(__dirname, 'dist')));

// --- 3. ROUTES ---

// The Main Page (EJS)
app.get('/', (req, res) => {
    res.render('index', { title: 'Surfer Survivor' });
});

// The Pink Dashboard (React/JSX via Vite)
app.get('/dashboard-pink', (req, res) => {
    // Since free.jsx is bundled into index.html by Vite, we send the entry point
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// --- 4. EXPORT FOR VERCEL ---
export default app;
