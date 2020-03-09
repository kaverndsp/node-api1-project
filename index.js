const express = require("express");
const shortid = require("shortid");

const server = express();

//ARRAYS
const users = [];


server.use(express.json());

const PORT = 5000;
server.listen(PORT, () => 
    console.log(`\n ** API running on https://localhost:${PORT} ** \n`)
);

server.post('/api/users', (req, res) => {
    
    const userInfo = req.body;
    
    userInfo.id = shortid.generate();

    users.push(userInfo);

    res.status(201).json(userInfo);
    // res.status(400).json({ errorMessage: "Please provide name and bio for the user." })

});

server.get('/api/users', (req, res) => {
res.status(200).json(users);


})

server.get(`/api/users/:id`, (req, res) => {
    if (`${users.id}` === req.params.id) {
        return req.body; } 
    res.status(200).json(req.body);
})