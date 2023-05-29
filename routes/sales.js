import express from "express";
import getSales from "../controllers/sales.js";

const router = express.Router();

router.getSales("/sales", getSales);

export default router;
