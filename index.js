const express = require('express');

const app = express();

require('./routes')(app);

const port = 4200;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

