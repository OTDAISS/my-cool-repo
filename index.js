const express = require('express');
const path = require('path');
const app = express();

// 1. SETTINGS: Tells Node to use the EJS templates in your /views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. ASSETS: Serves your ocean-themed CSS/Images from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 3. HOME ROUTE: Logic for the Pink (Free) and Blue (Paid) Tiers
app.get('/', (req, res) => {
    // For today's launch, we render the 'index.ejs' file from /views
    res.render('index', { 
        pageTitle: "AI Surfer Survivor",
        brandColor: "#00ced1" // Your signature bright blue-green
    });
});

// 4. PORT: Uses the environment's port (for Vercel/Replit) or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Surfer Survivor site is LIVE on port ${PORT}`);
    console.log(`Branding: Deep Ocean Blue & Bright Teal active.`);
});
