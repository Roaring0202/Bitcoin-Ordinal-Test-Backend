const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config()
const app = express();

const port = process.env.port||3000;
const host = process.env.host||'localhost';

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

let ordinals = [];

app.use(express.static(path.join(__dirname, 'public')));

// REST API endpoints
// GET /ordinals - Retrieve all stacked ordinals
app.get('/ordinals', (req, res) => {
    res.status(201).json({
        success: true,
        ordinals
    });
});

// POST /stack - stack new ordinal
app.post('/stack', (req, res) => {
    const newItem = req.body;
    const idx = ordinals.findIndex(o=>o.id === newItem.id)
    if(idx >= 0) {
        return res.status(400).json({
            success:false,
            message: 'Ordinal stacked already'
        })
    }
    ordinals.push(newItem);
    res.status(201).json({
        success: true
    });
});

// POST /unstack - unstack from stacked ordinals
app.post('/unstack', (req, res) => {
    const item = req.body;
    const idx = ordinals.findIndex(o=>o.id === item.id)
    if(idx === -1) {
        return res.status(400).json({
            success:false,
            message: 'Ordinal not found'
        })
    }

    ordinals.splice(idx, 1)
    res.status(201).json({
        success: true
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});