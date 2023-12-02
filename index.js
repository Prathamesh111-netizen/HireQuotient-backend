import dotenv from "dotenv";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();


const app = express();
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json({ limit: "5mb" })); // middleware to use req.body

app.use(cors()); // to avoid CORS errors


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
    res.send("Health check OK");
});

// routes
app.use("/api/users", userRoutes);

// middleware to act as fallback for all 404 errors
app.use(notFound);

// configure a custome error handler middleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server running on port ${process.env.PORT}`);
});