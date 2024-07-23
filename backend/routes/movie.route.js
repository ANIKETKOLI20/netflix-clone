import express from 'express';
import { getTrendingMovie, getMovieTrailers , getMovieDetails , getSimilarMovie  , getByMovieCategory } from '../controllers/movie.controller.js';

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovie);
router.get("/:category", getByMovieCategory);

export default router;
