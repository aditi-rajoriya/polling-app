import express from "express";
import { createPoll,getAllPolls,getPollById,votePoll } from "../controllers/pollController.js";

const router = express.Router();

// Create Poll
router.post("/", createPoll);

router.get("/", getAllPolls);

router.get("/:id", getPollById);

router.post("/:id/vote", votePoll);

export default router;

