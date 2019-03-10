const express = require('express');
const app = express();


// Startup
require('./startup/connect-db')();
require('./startup/routes')(app);






const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up. Listening on port ${port}...`);
});
