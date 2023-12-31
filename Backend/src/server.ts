import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors';
import express from 'express'
import compression from 'compression';
import colors from 'colors';
import conncetDb from './utils/lib/mongodb';
import routers from './route/v1/index';
import { errorHandler } from './middleware/errorHandler';

// initialized the app and port
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

app.use(express.json());
app.use(compression());  //reduce size for production levele fast working

// mongodb connect 
try {
    conncetDb();
} catch (error) {
    console.log("Could not connect to Mongoose: ", error);
};

// routes
app.use("/api/v1", routers());

// home || testing route
app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "Welcome to the p-blog server",
        data: " dummy data for home page of the p-blog server.",
    });
});

// if not found route
app.all("*", (req, res) => {
    res.status(404).send("NO ROUTE FOUND.");
});

// global error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(colors.bgCyan(`p-blog server listening on port: ${port}`))
});