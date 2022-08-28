const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 7000;

app.use(
    morgan(function (token, req, res) {
        return [
            "method: ", token.method(req, res), "\n",
            "url: ", token.url(req, res), "\n",
            "Status: ", token.status(req, res), "\n",
            "Content length: ", token.res(req, res, 'content-length'), "\n",
            "response-time: ", token['response-time'](req, res), 'ms', "\n",
            "date: ", token['date'](req, res), "\n",
            "http version: ", token['http-version'](req, res), "\n",
        ].join(' ')
    })
);
app.get('/', (req, res) => {
    res.send("<h1>Welcome!</h1>");
});
app.post('/morgan', (req, res) => {
    console.log(req.body);
    res.send("POST Request success")
});
app.listen(port, () => {
    console.log("server is started at port 7000");
});