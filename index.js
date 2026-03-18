const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { 
        pageTitle: "AI Surfer Survivor",
        brandColor: "#00ced1", 
        deepBlue: "#003366"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 SURVIVOR LIVE ON PORT ${PORT}`));
