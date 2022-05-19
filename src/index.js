const express = require('express');
const app = express();

require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json')

const protocol = process.env.PROTOCOL || "http";
const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')

app.use(
    routes,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => console.log(`
    Server started in http://localhost:${port} or ${protocol}://${ip}:${port}
`));