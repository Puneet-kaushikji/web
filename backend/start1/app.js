const express = require("express")
const app = express();

app.get("/",function(req,res) {
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        res.send(result);
    });

})


app.listen(3000);