import express from 'express'
import { getTrendingTv, getTvTrailers , getTvDetails , getSimilarTv  , getByTvCategory } from '../controllers/tv.controller.js';

const router = express.Router()

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTv);
router.get("/:category", getByTvCategory);

export default router;