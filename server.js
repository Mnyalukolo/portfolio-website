const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Portfolio API is running successfully');
});

app.get('/api/profile', (req, res) => {
    res.json({
        name: 'Fredy Nyanga',
        role: 'Data Analyst & Web Developer'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
