import express from "express";

const app = express();

app.get('/', (req, res) => {

    res.send('OK');

});

app.post("/", (req, res) => {

    res.json({
        status: 200,
        message: 'Bem vindo ao NLW-5'
    });

});

app.listen(3000, () => console.log('Server is running'));