const express = require('express');
const app = express();

app.get('/api/profile', (req, res) => {
    res.json({
        name: "Fredy Nyanga",
        profession: "Data Analyst & Web Developer",
        country: "Tanzania"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});