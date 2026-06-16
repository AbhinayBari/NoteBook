import express from 'express';
import dotenv  from "dotenv";
import connectDB from './config/connectDB.js';
import cors from 'cors';
import noteRoutes from './routes/note.route.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello World5!');
});

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1/notebookapp", noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

