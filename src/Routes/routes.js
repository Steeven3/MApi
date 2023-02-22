import express from 'express';
import { index } from '../Controllers/apiController.js';

export const routes = express.Router();

routes.get('/get', index);