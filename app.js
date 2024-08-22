const express = require('express');
const app = express();



app.get("/sales" , (  req , res ) => {
        res.json({
               name : 'Sales',
               data : [2, 33, 11, 22]
        })
})


app.listen(3001 , ( ) => {
         console.log("Server started on port 3001")
})