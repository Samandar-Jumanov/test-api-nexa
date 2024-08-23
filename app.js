const express = require('express');
const app = express();

app.get("/sales", (req, res) => {
    res.json([
        {
            name: "Product One",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
        },
        {
            name: "Product Two",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
        }
    ]);
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});
