import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure EJS finds your views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve Vite's static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// IMPORTANT: Export for Vercel
export default app;
