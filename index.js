const express = require('express');
const path = require('path');
const app = express();

// 1. SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. ASSETS (CSS, Images, Logos)
app.use(express.static(path.join(__dirname, 'public')));

// 3. THE HOME PAGE (Pink Tier Landing)
app.get('/', (req, res) => {
    res.render('index', { 
        pageTitle: "AI Surfer Survivor",
        brandColor: "#00ced1", // Bright Blue-Green
        deepBlue: "#003366"     // Deep Ocean Blue
    });
});

// 4. THE BLUE TIER (Locked Content)
app.get('/blue-tier', (req, res) => {
    res.render('index', { 
        pageTitle: "Blue Tier Dashboard",
        brandColor: "#00ced1",
        deepBlue: "#003366"
    });
});

// 5. START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 SURFER SURVIVOR IS LIVE!`);
    console.log(`Maps to your Replit URL to see it.`);
});
