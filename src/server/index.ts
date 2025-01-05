import express from 'express';
import cors from 'cors';
<<<<<<< HEAD
import { config } from './config/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import routes from './routes/index.js';

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
=======
import pestDetectionRoutes from './api/pestDetection.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/pest-detection', pestDetectionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
>>>>>>> e5202af4885ef584c97651adf360f35659edf107
});