import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import PersonRoutes from './routes/apartment.routes'; 


dotenv.config(); 

const app: Application = express(); 

app.use(cors()); 
app.use(bodyParser.json()); 

const port = process.env.PORT || 3000; 

//  routes
app.use('/api/apartments', PersonRoutes);

//server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
