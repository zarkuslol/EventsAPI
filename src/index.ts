import express, { Request, Response } from "express";
import mainRouter from './controllers/main.controller';
import 'dotenv/config'
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use('/main', mainRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Server running on port " + port);
});

export default app; // for testing
