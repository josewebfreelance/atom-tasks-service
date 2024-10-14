import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import configRoute from "./routes/configRoute";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express()

app.use(cors());
app.use(express.json());
app.use(configRoute);

app.listen(+PORT, () => console.log(`Process started in ${+PORT}`))
