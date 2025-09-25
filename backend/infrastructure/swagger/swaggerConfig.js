import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Ganhadores",
      version: "1.0.0",
      description: "Documentação da API com Swagger + Express + MongoDB",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./infrastructure/routes/*.js"], // arquivos com as rotas e comentários swagger
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
