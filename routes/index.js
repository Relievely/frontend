import { Router } from 'express';
import { getIndex } from '../controllers/indexController.js';
import { getSettings } from '../controllers/settingsController.js';
import {getHome} from "../controllers/homeController.js";
import {getWiki} from "../controllers/wikiController.js";

const router = Router();

// all routes
router.get('/', getIndex);
router.get('/settings', getSettings);
router.get('/home', getHome);
router.get('/wiki', getWiki);

export default router;