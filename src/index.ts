import cors from 'cors';
import express from 'express';
import { corsConfig } from './config/cors';
import router from './routes/routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors(corsConfig))

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});