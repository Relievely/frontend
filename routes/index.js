import { Router } from 'express';
import { getIndex } from '../controllers/indexController.js';
import { getSettings } from '../controllers/settingsController.js';

const router = Router();

// all routes
router.get('/', getIndex);
router.get('/settings', getSettings);

export default router;