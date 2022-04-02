const express = require("express");
const cornel = require("../lib/cornel");
const app = express();
app.use(cornel(":url: :remote-addr:"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(5000, () => {
    console.log("Example app listening on port 6000!");
});