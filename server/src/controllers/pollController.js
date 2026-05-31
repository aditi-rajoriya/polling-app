import Poll from "../models/Poll.js";

export const createPoll = async (req, res) => {
  try {
    const { question, options } = req.body;

    // Validation
    if (!question || !options || options.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Question and at least 2 options are required",
      });
    }

    // Convert option strings into objects
    const formattedOptions = options.map((option) => ({
      text: option,
    }));

    // Create poll
    const poll = await Poll.create({
      question,
      options: formattedOptions,
    });

    res.status(201).json({
      success: true,
      poll,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all polls function

export const getAllPolls = async (req, res) => {
  try {
    console.log("Fetching polls...");

    const polls = await Poll.find().sort({ createdAt: -1 });

    console.log("Polls fetched:", polls.length);

    res.status(200).json({
      success: true,
      polls,
    });
  } catch (error) {
    console.log("GET ALL POLLS ERROR:");
    console.dir(error, { depth: null });

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPollById = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);

    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }

    res.status(200).json({
      success: true,
      poll,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const votePoll = async (req, res) => {
  try {
    const { optionId } = req.body;

    const poll = await Poll.findById(req.params.id);

    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }

    const option = poll.options.id(optionId);

    if (!option) {
      return res.status(404).json({
        success: false,
        message: "Option not found",
      });
    }

    option.votes += 1;

    await poll.save();

    res.status(200).json({
      success: true,
      poll,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};