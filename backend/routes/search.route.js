import express from 'express'
import { serachPerson , serachMovie , serachTv , getSearchHistory , removeItemFromSearchHistory } from '../controllers/search.controller.js'


const router = express.Router()

router.get('/person/:query' ,  serachPerson)
router.get('/movie/:query' , serachMovie)
router.get('/tv/:query', serachTv)

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory);

export default router