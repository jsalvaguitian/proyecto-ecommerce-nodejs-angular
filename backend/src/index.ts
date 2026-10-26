import express, {type Request, type Response} from 'express';
import cors from "cors";
import {config} from "./config/config.js"
import healthRoutes from "./routes/health.router.js";



const app = express();

const port = config.port;

app.use(express.json());
app.use(cors());

app.use("/api/health", healthRoutes);

app.listen(port, () =>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});