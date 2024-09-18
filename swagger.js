const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for your project",
    },
  },
  apis: ["./route/*.js"], // Lokasi file route Express.js kamu
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
