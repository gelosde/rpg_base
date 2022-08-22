import "reflect-metadata";
import app from "./app";
import { config } from "dotenv";
import { createConnection } from "typeorm";
import swaggerUiExpress from "swagger-ui-express"
import swaggerDocument from "./swagger.json"

config();

createConnection()
  .then(() => {
    const PORT = process.env.PORT || 3000;

    app.use("/", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))
    console.log("Database connected");
    app.listen(PORT, () => console.log(`App runing on port ${PORT}`));
  })
  .catch((error) => console.log(error));
