const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(chefs)
});


app.get('/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(n => n.id === id);
    res.send(selectedChef);
})


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
});