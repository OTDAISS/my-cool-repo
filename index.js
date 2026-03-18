const express = require('express');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Pulls from Replit Secrets
const app = express();

// 1. ENGINE SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 2. THE HOME ROUTE (Pink Tier)
app.get('/', (req, res) => {
    res.render('index', { 
        pageTitle: "AI Surfer Survivor",
        brandColor: "#00ced1", 
        deepBlue: "#003366"
    });
});

// 3. THE SUCCESS ROUTE (Post-Purchase)
app.get('/success', (req, res) => {
    res.render('success');
});

// 4. THE CANCEL ROUTE (If they back out of Stripe)
app.get('/cancel', (req, res) => {
    res.redirect('/');
});

// 5. START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 SURFER SURVIVOR IS LIVE ON PORT ${PORT}`);
    console.log(`Check your Replit Webview to see the Teal & Blue branding!`);
});
